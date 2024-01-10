import type OpenAI from 'openai';

import { type DishParamsType } from '~/models';

export const generatePrompt = (params: DishParamsType) => {
  const ingredientsString = params.ingredients.join(',');
  const seasoningString = params.seasoning.join(',');
  const preferencesString = params.preferences?.join(',');
  const typeOfCuisine = params.typeOfCuisine;
  return `Please generate four recipes based on the following ingredients and preferences. The response should include exactly four recipes, each detailed in a separate object within an array. For each recipe, provide the title, list of ingredients, and cooking instructions. Please provide the recipes strictly in the following format and do not add any additional commentary.
Now, I'll provide you with the ingredients and preference information. For the ingredients, I'll divide them into seasonings and other food ingredients. The seasonings include ${seasoningString}. The other ingredients are ${ingredientsString}.
As for preferences, it should be ${preferencesString}. Please provide recipes in ${typeOfCuisine} and another point to consider is ${params.extraDescription}. Also, in the instructions, please provide detailed information on how much to cook, for how long, and in what manner. It is crucial that you respond with the recipes written in Korean and adhere to the example format provided and you have to use only the ingredients listed that I gave you. Thank you!.`;
};
export const getChatParams = (
  prompt: string,
  params?: Partial<OpenAI.ChatCompletionCreateParamsNonStreaming>,
): OpenAI.ChatCompletionCreateParamsNonStreaming => {
  const RecipeSchema = {
    type: 'object',
    properties: {
      result: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              description: '레시피의 제목',
            },
            ingredients: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  ingredient: {
                    type: 'string',
                    description: 'ingredient required in a recipe',
                  },
                  measurement: {
                    type: 'string',
                    description: 'measurement of ingredient',
                  },
                },
                description: '레시피에 필요한 재료와 계량 정보',
              },
              description: '각 재료와 계량 정보를 포함하는 배열',
            },
            instruction: {
              type: 'array',
              items: {
                type: 'string',
              },
              description: '조리 지시를 스텝별로 자세하게 설명한 배열',
            },
          },
          required: ['title', 'ingredients', 'instruction'],
        },
      },
    },
  };

  return {
    messages: [
      {
        role: 'system',
        content: 'Act like a chef giving me recipes for delicious dishes.',
      },
      { role: 'user', content: prompt },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    tools: [
      {
        type: 'function',
        function: {
          name: 'get_recipes',
          description:
            'Get four recipes using the given ingredients and information.',
          parameters: RecipeSchema,
        },
      },
    ],
    tool_choice: 'auto',
    ...params,
  };
};

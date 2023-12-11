import type OpenAI from 'openai';

import { type DishParamsType } from '~/models';

export const generatePrompt = (params: DishParamsType) => {
  const ingredientsString = params.ingredients.join(',');
  const seasoningString = params.seasoning.join(',');
  const preferencesString = params.preferences?.join(',');
  const typeOfCuisine = params.typeOfCuisine;
  return `Hello, I'm going to provide you with a list of food ingredients and preference information, and I'd like you to give me four recipes that I can make using that information.  Please provide the recipes strictly in the following format and do not add any additional commentary or instructions, or newline characters such as '\n':
  Example:[{"title": 'Recipe Title', "ingredients": [ [Ingredient, Measurement], [Ingredient, Measurement], ...rest ], "instruction": [ Please provide the cooking steps as an array of steps and do not assign sequence numbers ] }, ...rest of the recipes]
Now, I'll provide you with the ingredients and preference information. For the ingredients, I'll divide them into seasonings and other food ingredients. The seasonings include ${seasoningString}. The other ingredients are ${ingredientsString}.
As for preferences, it should be ${preferencesString}. Please provide recipes in ${typeOfCuisine} and another point to consider is ${params.extraDescription}. Also, in the instructions, please provide detailed information on how much to cook, for how long, and in what manner. It is crucial that you respond with the recipes written in Korean and adhere to the example format provided and you have to use only the ingredients listed that I gave you. Thank you!.`;
};
export const getChatParams = (
  prompt: string,
  params?: Partial<OpenAI.ChatCompletionCreateParamsNonStreaming>,
): OpenAI.ChatCompletionCreateParamsNonStreaming => {
  const schema = {
    type: 'object',
    properties: {
      title: { type: 'string', description: 'Descriptive title of the dish' },
      ingredients: {
        type: 'array',
        items: {
          type: 'array',
          items: { type: 'string' },
          description:
            'This array has two string properties, the first one is ingredients and the other one is measurement',
        },
      },
      instruction: {
        type: 'array',
        description: 'Steps to prepare the recipe.',
        items: { type: 'string' },
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
    ...params,
  };
};

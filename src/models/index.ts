import { z } from 'zod';

export const Preferences = z.enum(['Vegan', 'Gluten Free']);

export const PreferencesArray = z.array(Preferences);
export type PreferencesType = z.infer<typeof PreferencesArray>;
export const TypeOfCuisine = z.enum([
  '한식',
  '일식',
  '중식',
  '양식',
  '아무거나',
]);

const meats = ['소고기', '돼지고기', '돼지고기', '양고기', '닭고기'];

export const DishParams = z
  .object({
    ingredients: z
      .array(z.string())
      .min(3, '최소 3개 이상의 재료가 필요합니다.'),
    seasoning: z.array(z.string()).min(1, '최소 1개 이상의 양념이 필요합니다.'),
    preferences: PreferencesArray.optional(),
    typeOfCuisine: z.string(),
    extraDescription: z.string().optional(),
  })
  .superRefine((data, context) => {
    const includedMeat = meats.find((meat) => data.ingredients.includes(meat));
    const isVegan = data.preferences?.includes('Vegan');
    const hasTypeOfCuisine = data.typeOfCuisine.length > 0;
    if (includedMeat && isVegan) {
      const meatList = data.ingredients
        .filter((ingredient) => meats.includes(ingredient))
        .join(', ');

      context.addIssue({
        code: 'custom',
        message: `${meatList}가 포함된 경우 Vegan 선택은 불가능합니다.`,
        path: ['preferences'],
      });
    }

    if (!hasTypeOfCuisine) {
      context.addIssue({
        code: 'custom',
        message: '요리 종류를 선택해주세요.',
        path: ['typeOfCuisine'],
      });
    }
  });

const ingredient = z.object({
  ingredient: z.string(),
  measurement: z.string(),
});
export const Recipe = z.object({
  title: z.string(),
  ingredients: z.array(ingredient),
  instruction: z.array(z.string()),
});

export const Recipes = z.array(Recipe);

export const HistoryOfRecipe = z.object({
  id: z.string(),
  ingredients: DishParams,
  recipes: Recipes,
  createdAt: z.date(),
  updatedAt: z.date(),
  createdById: z.string(),
});

export const HistoriesOfRecipe = z.array(HistoryOfRecipe);

export type DishParamsType = z.infer<typeof DishParams>;
export type RecipesType = z.infer<typeof Recipes>;
export type RecipeType = z.infer<typeof Recipe>;
export type HistoriesOfRecipeType = z.infer<typeof HistoriesOfRecipe>;

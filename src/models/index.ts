import { z } from 'zod';

export const Preferences = z.enum(['Vegan', 'Gluten Free']);

export const TypeOfCuisine = z.enum([
  '한식',
  '일식',
  '중식',
  '양식',
  '아무거나',
]);
export const DishParams = z.object({
  ingredients: z.array(z.string()).min(3),
  preferences: Preferences.array().optional(),
  typeOfCuisine: TypeOfCuisine,
  extraDescription: z.string().optional(),
});

export const Recipe = z.object({
  title: z.string(),
  ingredients: z.array(z.string()),
  instruction: z.array(z.string()),
});

export const Recipes = z.array(Recipe).min(4);

export type DishParamsType = z.infer<typeof DishParams>;
export type RecipesType = z.infer<typeof Recipes>;

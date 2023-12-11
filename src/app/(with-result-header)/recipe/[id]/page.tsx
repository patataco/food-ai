import { redirect } from 'next/navigation';

import RecipesGroup from '~/app/_components/RecipesGroup';
import RecipesList from '~/app/_components/RecipesList';
import SelectedIngredientsInfo from '~/app/_components/SelectedIngredientsInfo';
import { DishParams, Recipes } from '~/models';
import { getServerAuthSession } from '~/server/auth';
import { api } from '~/trpc/server';

const Page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerAuthSession();
  if (!session) {
    redirect('/404');
  }
  const { id } = params;

  const response = await api.ai.getRecipeById.query({ id });
  if (!response) {
    redirect('/404');
  }

  const selectedIngredients = DishParams.parse(
    JSON.parse(response.ingredients),
  );
  const recipes = Recipes.parse(JSON.parse(response.recipes));

  return (
    <>
      <SelectedIngredientsInfo selectedIngredients={selectedIngredients} />
      <RecipesGroup>
        <RecipesList recipes={recipes} />
      </RecipesGroup>
    </>
  );
};

export default Page;

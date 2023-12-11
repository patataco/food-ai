import { redirect } from 'next/navigation';

import RecipesHistoryList from '~/app/_components/RecipesHistoryList';
import { SubTitle } from '~/app/_components/SubTitle';
import { DishParams, type HistoriesOfRecipeType, Recipes } from '~/models';
import { getServerAuthSession } from '~/server/auth';
import { api } from '~/trpc/server';

const Page = async () => {
  const session = await getServerAuthSession();
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/history');
  }

  const res = await api.ai.getRecipesList.query();
  const parsedHistory: HistoriesOfRecipeType = res.map((item) => ({
    ...item,
    ingredients: DishParams.parse(JSON.parse(item.ingredients)),
    recipes: Recipes.parse(JSON.parse(item.recipes)),
  }));
  return (
    <div className="mx-1 flex flex-col items-center gap-6 p-2">
      <SubTitle className="pt-6 text-yellow-900">나의 레시피</SubTitle>
      <RecipesHistoryList histories={parsedHistory} />
    </div>
  );
};

export default Page;

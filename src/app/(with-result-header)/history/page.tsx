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
  if (parsedHistory.length < 1) return <NoneHistoryContainer />;
  return (
    <div className="mx-1 flex flex-col items-center gap-6 p-2">
      <SubTitle className="pt-6 text-yellow-900">나의 레시피</SubTitle>
      <RecipesHistoryList histories={parsedHistory} />
    </div>
  );
};

export default Page;

const NoneHistoryContainer = () => {
  return (
    <div className="mx-1 flex flex-col items-center gap-6 p-2">
      <SubTitle className="pt-6 text-yellow-900">나의 레시피</SubTitle>
      <div className="flex min-h-[600px] w-full flex-col items-center justify-center gap-4 bg-white px-2 py-8">
        <div>아직 저장된 레시피가 없습니다.</div>
        <div>지금 바로 나만의 레시피를 만들어보세요.</div>
      </div>
    </div>
  );
};

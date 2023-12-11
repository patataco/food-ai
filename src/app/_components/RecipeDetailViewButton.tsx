'use client';
import { useRouter } from 'next/navigation';

import PointerRightIcon from '~/app/_components/PointerRightIcon';
import { Button } from '~/app/_components/ui/button';

const RecipeDetailViewButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const goToRecipeDetails = (id: string) => {
    router.push(`/recipe/${id}`);
  };
  return (
    <Button
      className="ml-auto border-none bg-white p-0"
      onClick={() => {
        goToRecipeDetails(id);
      }}>
      <span>레시피 보기</span>
      <PointerRightIcon />
    </Button>
  );
};
export default RecipeDetailViewButton;

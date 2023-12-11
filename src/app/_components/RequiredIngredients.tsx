import { Badge } from '~/app/_components/ui/badge';
import { type RecipeType } from '~/models';

type RequiredIngredientsProps = Pick<RecipeType, 'ingredients'>;

const RequiredIngredients = ({ ingredients }: RequiredIngredientsProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="text-xl font-medium">재료</div>
      <div className="flex w-full flex-wrap justify-center gap-2">
        {ingredients.map(([ingredient, measurement]) => {
          return (
            <Badge key={ingredient} variant="default" className="bg-amber-300">
              <div className="flex gap-1 text-sm text-neutral-600 xs:text-base">
                <span>{ingredient}</span>
                <span>{measurement}</span>
              </div>
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default RequiredIngredients;

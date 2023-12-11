import PreferencesBadge from '~/app/_components/PreferencesBadge';
import RecipeDetailViewButton from '~/app/_components/RecipeDetailViewButton';
import RecipeImage from '~/app/_components/RecipeImage';
import { Badge } from '~/app/_components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/app/_components/ui/card';
import { type HistoriesOfRecipeType } from '~/models';

const RecipesHistoryList = ({
  histories,
}: {
  histories: HistoriesOfRecipeType;
}) => {
  return (
    <div className="flex min-h-[600px] w-full flex-col gap-4 bg-white px-2 py-8">
      {histories.map((history) => {
        const { id, ingredients, recipes, createdAt } = history;
        const cuisineTitle = recipes[0]
          ? `${recipes[0].title} 외 ${recipes.length - 1}개`
          : '';
        const isVegan = ingredients.preferences
          ? ingredients.preferences.includes('Vegan')
          : false;
        const isGlutenFree = ingredients.preferences
          ? ingredients.preferences.includes('Gluten Free')
          : false;
        return (
          <Card
            className="flex h-[240px] w-full flex-col gap-3 rounded-none border-0"
            key={id}>
            <CardHeader className="flex-row items-center gap-2 space-y-0 border-b-2 py-0 pl-2 pr-0">
              <CardTitle className="text-base xs:text-lg">
                {cuisineTitle}
              </CardTitle>
              <PreferencesBadge isVegan={isVegan} isGlutenFree={isGlutenFree} />
              <RecipeDetailViewButton id={id} />
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex h-[180px] shrink-0 items-center gap-4 self-stretch">
                <RecipeImage
                  title={cuisineTitle}
                  className="flex w-24 self-stretch md:w-60 lg:w-80"
                  ratio="h-full object-cover"
                />
                <div className="flex h-full shrink-0 grow basis-0 flex-col gap-4 self-stretch">
                  <IngredientsOfRecipe
                    title="재료"
                    items={ingredients.ingredients}
                  />
                  <IngredientsOfRecipe
                    title="양념"
                    items={ingredients.seasoning}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default RecipesHistoryList;

type IngredientsOfRecipeType = {
  title: string;
  items: string[];
};
const IngredientsOfRecipe = ({ title, items }: IngredientsOfRecipeType) => {
  const getIngredients = () => {
    if (items.length > 4) {
      const newIngredients = items.slice(0, 4).join(', ');
      return <div>{`${newIngredients} 외 ${items.length - 4}개`}</div>;
    }
    return <div>{items.join(', ')}</div>;
  };

  return (
    <div className="flex h-[110px] flex-1 flex-col justify-center gap-1 self-stretch">
      <Badge className="w-10 px-2">{title}</Badge>
      <span className="line-clamp-2">{getIngredients()}</span>
    </div>
  );
};

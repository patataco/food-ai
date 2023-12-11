import RecipeCard from '~/app/_components/RecipeCard';
import { type RecipesType } from '~/models';

const RecipesList = ({ recipes }: { recipes: RecipesType }) => {
  return (
    <>
      {recipes.map((recipe, index) => {
        return <RecipeCard recipe={recipe} key={index} />;
      })}
    </>
  );
};
export default RecipesList;

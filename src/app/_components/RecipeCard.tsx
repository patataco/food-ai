import Instruction from '~/app/_components/instruction';
import RecipeImage from '~/app/_components/RecipeImage';
import RequiredIngredients from '~/app/_components/RequiredIngredients';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/app/_components/ui/card';
import { type RecipeType } from '~/models';

const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {
  const { title, ingredients, instruction } = recipe;
  return (
    <Card className="flex flex-col items-center overflow-hidden shadow-amber-400">
      <RecipeImage title={title} ratio="aspect-4/3" className="w-full" />
      <RecipeTitle title={title} />
      <CardContent className="flex flex-1 flex-col gap-6">
        <RequiredIngredients ingredients={ingredients} />
        <Instruction instruction={instruction} />
      </CardContent>
    </Card>
  );
};
export default RecipeCard;

const RecipeTitle = ({ title }: { title: string }) => {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
  );
};

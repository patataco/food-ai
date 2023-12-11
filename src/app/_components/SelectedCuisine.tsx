import { Badge } from '~/app/_components/ui/badge';
import { type DishParamsType } from '~/models';

type SelectedCuisineProps = Pick<DishParamsType, 'typeOfCuisine'>;
const SelectedCuisine = ({ typeOfCuisine }: SelectedCuisineProps) => {
  return (
    <div>
      <Badge
        variant="default"
        className="bg-amber-300 text-base text-neutral-600">
        요리 종류
      </Badge>
      <div className="pl-3 pt-2 text-neutral-500">{typeOfCuisine}</div>
    </div>
  );
};
export default SelectedCuisine;

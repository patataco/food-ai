import ExtraDescription from '~/app/_components/ExtraDescription';
import SelectedCuisine from '~/app/_components/SelectedCuisine';
import SelectedPreferences from '~/app/_components/SelectedPreferences';
import UserSelectionList from '~/app/_components/UserSelectionList';
import { type DishParamsType } from '~/models';

const SelectedIngredientsInfo = ({
  selectedIngredients,
}: {
  selectedIngredients: DishParamsType;
}) => {
  const {
    ingredients,
    seasoning,
    typeOfCuisine,
    preferences,
    extraDescription,
  } = selectedIngredients;
  return (
    <div className="hidden flex-col gap-4 pl-12 pr-10 md:flex md:pt-6">
      <UserSelectionList materials={ingredients} title="내가 선택한 재료" />
      <UserSelectionList materials={seasoning} title="내가 선택한 양념" />
      <div className="flex gap-10">
        <SelectedPreferences preferences={preferences} />
        <SelectedCuisine typeOfCuisine={typeOfCuisine} />
      </div>
      <ExtraDescription extraDescription={extraDescription} />
    </div>
  );
};

export default SelectedIngredientsInfo;

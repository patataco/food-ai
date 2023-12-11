import { Badge } from '~/app/_components/ui/badge';
import { type DishParamsType } from '~/models';

type PreferencesType = Pick<DishParamsType, 'preferences'>;
const SelectedPreferences = ({ preferences }: PreferencesType) => {
  const selectedPreferences = preferences ?? [];
  if (selectedPreferences.length > 0) {
    return (
      <div>
        <Badge
          variant="default"
          className="bg-amber-300 text-base text-neutral-600">
          기호
        </Badge>
        <div className="pl-3 pt-2 text-neutral-500">
          {selectedPreferences.map((preference) => {
            return (
              <span key={preference} className="pr-3">
                {preference}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Badge
          variant="default"
          className="bg-amber-300 text-base text-neutral-600">
          기호
        </Badge>
        <div className="pl-3 pt-2 text-neutral-500">선택 안함</div>
      </div>
    );
  }
};
export default SelectedPreferences;

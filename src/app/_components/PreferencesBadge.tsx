import GlutenFreeBadge from '~/app/_components/GlutenFreeBadge';
import VeganBadge from '~/app/_components/VeganBadge';

type PreferencesBadgeProps = {
  isVegan: boolean;
  isGlutenFree: boolean;
};

const PreferencesBadge = ({ isVegan, isGlutenFree }: PreferencesBadgeProps) => {
  return (
    <div className="flex">
      {isVegan && <VeganBadge width="20" height="20" color="#27F73C" />}
      {isGlutenFree && (
        <GlutenFreeBadge width="20" height="20" color="#683709" />
      )}
    </div>
  );
};
export default PreferencesBadge;

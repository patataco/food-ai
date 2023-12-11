import { Badge } from '~/app/_components/ui/badge';

type UserSelectionListProps = {
  materials: string[];
  title: string;
};

const UserSelectionList = ({ materials, title }: UserSelectionListProps) => {
  return (
    <div>
      <Badge
        variant="default"
        className="bg-amber-300 text-base text-neutral-600">
        {title}
      </Badge>
      <div className="pl-3 pt-2">
        {materials.map((ingredient, index) => {
          return (
            <span key={index} className="pr-3 text-neutral-500">
              {ingredient}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default UserSelectionList;

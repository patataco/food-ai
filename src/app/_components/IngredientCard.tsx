import { Card } from '~/app/_components/ui/card';
import { cn } from '~/lib/utils';

type IngredientCardProps = {
  label: string;
  image: string;
  isSelected: boolean;
  onClick?: () => void;
};
const IngredientCard = (props: IngredientCardProps) => {
  const { label, image, isSelected, onClick } = props;

  return (
    <Card
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center aspect-square gap-1 font-medium cursor-pointer',
        isSelected ? 'shadow-[inset_0_-2px_8px_rgba(252,211,77,0.6)]' : '',
      )}>
      <div className="text-4xl">{image}</div>
      <div className="text-base">{label}</div>
    </Card>
  );
};

export default IngredientCard;

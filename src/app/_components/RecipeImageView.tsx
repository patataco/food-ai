import { useSearchImageQuery } from '~/hooks/useSearchImageQuery';
import { cn } from '~/lib/utils';

const RecipeImageView = ({
  title: dish,
  className,
  ratio,
}: {
  title: string;
  className?: string;
  ratio?: string;
}) => {
  const { data } = useSearchImageQuery(dish);

  if (!data) return;

  return (
    <div className={cn(className)}>
      <img src={data} alt={dish} className={cn(ratio, 'w-full')} />
    </div>
  );
};
export default RecipeImageView;

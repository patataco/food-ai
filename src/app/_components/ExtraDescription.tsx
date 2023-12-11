import { Badge } from '~/app/_components/ui/badge';
import { type DishParamsType } from '~/models';

type ExtraDescriptionProps = Pick<DishParamsType, 'extraDescription'>;

const ExtraDescription = ({ extraDescription }: ExtraDescriptionProps) => {
  const description = extraDescription ? (
    <div>{extraDescription}</div>
  ) : (
    <div>해당 없음</div>
  );

  return (
    <div>
      <Badge
        variant="default"
        className="bg-amber-300 text-base text-neutral-600">
        추가 요청사항
      </Badge>
      <div className="pl-3 pt-2 text-neutral-500">{description}</div>
    </div>
  );
};

export default ExtraDescription;

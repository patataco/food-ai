import { useFormContext } from 'react-hook-form';

import { cn } from '~/lib/utils';
import { type DishParamsType } from '~/models';

type FormErrorMessageProps = keyof DishParamsType;
const FormErrorMessage = ({
  title,
  className,
}: {
  title: FormErrorMessageProps;
  className?: string;
}) => {
  const { formState } = useFormContext<DishParamsType>();

  return (
    <div
      className={cn(
        className,
        formState.errors[title] ? 'visible text-sm text-red-600' : 'invisible',
        'min-h-[24px]',
        'flex',
        'items-center',
      )}>
      <span>{formState.errors[title]?.message}</span>
    </div>
  );
};

export default FormErrorMessage;

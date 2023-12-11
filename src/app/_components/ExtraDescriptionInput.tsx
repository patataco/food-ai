import { type ChangeEvent } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input } from '~/app/_components/ui/input';
import { type DishParamsType } from '~/models';

const ExtraDescriptionInput = () => {
  const { control, setValue } = useFormContext<DishParamsType>();
  return (
    <>
      <Controller
        control={control}
        name="extraDescription"
        render={({ field, fieldState }) => {
          return (
            <div className="w-full pt-[28px] md:max-w-[768px]">
              <Input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const newValue = e.target.value;
                  field.onChange(newValue);
                }}
              />
            </div>
          );
        }}
      />
    </>
  );
};

export default ExtraDescriptionInput;

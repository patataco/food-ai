import { Controller, useFormContext } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/app/_components/ui/select';
import { type DishParamsType } from '~/models';

const TypeOfCuisineSelector = () => {
  const { control, setValue, trigger } = useFormContext<DishParamsType>();

  return (
    <>
      <Controller
        control={control}
        name="typeOfCuisine"
        render={({ field, fieldState }) => {
          const handleValueChange = async (value: string) => {
            field.onChange(value);
            await trigger();
          };
          return (
            <div className="w-full pt-3 md:max-w-[768px]">
              <Select
                onValueChange={handleValueChange}
                defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="요리 종류를 선택해주세요." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="한식">한식</SelectItem>
                  <SelectItem value="일식">일식</SelectItem>
                  <SelectItem value="중식">중식</SelectItem>
                  <SelectItem value="양식">양식</SelectItem>
                  <SelectItem value="아무거나">아무거나</SelectItem>
                </SelectContent>
              </Select>
            </div>
          );
        }}
      />
    </>
  );
};

export default TypeOfCuisineSelector;

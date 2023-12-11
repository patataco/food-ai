import { Controller, useFormContext } from 'react-hook-form';

import SeasoningCard from '~/app/_components/SeasoningCard';
import SeasoningsGroup from '~/app/_components/SeasoningsGroup';
import { SEASONINGS } from '~/constants';
import { type DishParamsType } from '~/models';

const SeasoningsList = () => {
  const { control, setValue, trigger } = useFormContext<DishParamsType>();

  return (
    <Controller
      name="seasoning"
      control={control}
      render={({ field, fieldState }) => {
        return (
          <SeasoningsGroup>
            {SEASONINGS.map(({ label, image }) => {
              const isSelected = field.value.includes(label);
              const handleLabelSelection = async () => {
                const newValue = isSelected
                  ? field.value.filter((value) => value !== label)
                  : [...field.value, label];
                setValue('seasoning', newValue);
                await trigger();
              };
              return (
                <SeasoningCard
                  key={label}
                  label={label}
                  image={image}
                  isSelected={isSelected}
                  onClick={handleLabelSelection}
                />
              );
            })}
          </SeasoningsGroup>
        );
      }}
    />
  );
};

export default SeasoningsList;

'use client';
import { Controller, useFormContext } from 'react-hook-form';

import IngredientCard from '~/app/_components/IngredientCard';
import IngredientsGroup from '~/app/_components/IngredientsGroup';
import { INGREDIENTS } from '~/constants';
import { type DishParamsType } from '~/models';

const IngredientsList = () => {
  const { control, setValue, trigger, register, formState } =
    useFormContext<DishParamsType>();

  return (
    <Controller
      name="ingredients"
      control={control}
      render={({ field, fieldState }) => {
        return (
          <IngredientsGroup>
            {INGREDIENTS.map(({ label, image }) => {
              const isSelected = field.value.includes(label);
              return (
                <IngredientCard
                  key={label}
                  label={label}
                  image={image}
                  isSelected={isSelected}
                  onClick={async () => {
                    const newValue = isSelected
                      ? field.value.filter((value) => value !== label)
                      : [...field.value, label];
                    setValue('ingredients', newValue);
                    await trigger();
                  }}
                />
              );
            })}
          </IngredientsGroup>
        );
      }}
    />
  );
};

export default IngredientsList;

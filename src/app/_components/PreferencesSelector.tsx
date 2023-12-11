import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '~/app/_components/ui/checkbox';
import { PREFERENCES } from '~/constants';
import { type DishParamsType } from '~/models';

const PreferencesSelector = () => {
  const { control, setValue, trigger } = useFormContext<DishParamsType>();

  return (
    <>
      <Controller
        control={control}
        name="preferences"
        render={({ field, fieldState }) => {
          return (
            <div
              className="flex w-full justify-center gap-8 pt-3 md:gap-16"
              onChange={async () => {
                await trigger();
              }}>
              {PREFERENCES.map((preference) => {
                return (
                  <div
                    key={preference}
                    className="flex flex-wrap items-center justify-center gap-2">
                    <Checkbox
                      id={preference}
                      checked={field.value?.includes(preference)}
                      onCheckedChange={(checked) => {
                        if (field.value) {
                          return checked
                            ? field.onChange([...field.value, preference])
                            : field.onChange(
                                field.value.filter(
                                  (value) => value !== preference,
                                ),
                              );
                        } else {
                          return checked
                            ? field.onChange([preference])
                            : field.onChange([]);
                        }
                      }}
                    />
                    <label htmlFor={preference}>{preference}</label>
                  </div>
                );
              })}
            </div>
          );
        }}
      />
    </>
  );
};
export default PreferencesSelector;

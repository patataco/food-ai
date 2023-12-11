import { useQuery } from '@tanstack/react-query';

import { getImages } from '~/utils/getImages';

export const useSearchImageQuery = (dish: string) => {
  return useQuery(['searchImage', dish], () => getImages(dish), {
    suspense: true,
  });
};

'use client';
import { type AxiosResponse } from 'axios/index';
import process from 'process';

import { apiClient, type SearchApiResponse } from '~/utils/axios';

export const getImages = async (dish: string) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY;
  const engineKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_ENGINE;

  const response: AxiosResponse<SearchApiResponse> = await apiClient.get(
    `/v1?key=${apiKey}&cx=${engineKey}&searchType=image&q=${dish}&num=1`,
  );

  if (!response.data.items?.[0]) {
    throw new Error('');
  } else {
    return response.data.items[0].link;
  }
};

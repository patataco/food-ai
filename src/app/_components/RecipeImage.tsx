'use client';

import { Suspense } from 'react';

import RecipeImageView from '~/app/_components/RecipeImageView';
import { Skeleton } from '~/app/_components/ui/skeleton';
import { cn } from '~/lib/utils';

type ImageProps = {
  title: string;
  className?: string;
  ratio?: string;
};
const RecipeImage = ({ title: dish, className, ratio }: ImageProps) => {
  return (
    <Suspense fallback={<Loading className={className} ratio={ratio} />}>
      <RecipeImageView title={dish} className={className} ratio={ratio} />
    </Suspense>
  );
};
export default RecipeImage;

export const Loading = ({ className, ratio }: Omit<ImageProps, 'title'>) => {
  return (
    <div className={cn(ratio, className)}>
      <Skeleton className="w-full" />
    </div>
  );
};

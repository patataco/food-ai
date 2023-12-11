import { type HTMLAttributes, type PropsWithChildren } from 'react';

import { cn } from '~/lib/utils';

export const SubTitle = ({
  className,
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => {
  return (
    <h2
      className={cn('text-xl font-bold xs:text-2xl self-center', className)}
      {...rest}>
      {children}
    </h2>
  );
};

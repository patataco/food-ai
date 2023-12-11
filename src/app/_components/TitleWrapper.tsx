import { type PropsWithChildren } from 'react';

const TitleWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-1">
      {children}
    </div>
  );
};

export default TitleWrapper;

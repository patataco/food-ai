import { type PropsWithChildren } from 'react';

const SeasoningsGroup = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid w-full grid-cols-3 gap-3 p-2 xs:grid-cols-4 xs:p-3 md:grid-cols-8">
      {children}
    </div>
  );
};

export default SeasoningsGroup;

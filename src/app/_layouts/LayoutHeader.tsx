import { type PropsWithChildren } from 'react';

const LayoutHeader = ({ children }: PropsWithChildren) => {
  return <div className="h-12 shrink-0 bg-amber-300">{children}</div>;
};

LayoutHeader.displayName = 'LayoutHeader';
export default LayoutHeader;

import { type PropsWithChildren } from 'react';

const LayoutBody = ({ children }: PropsWithChildren) => {
  return <main className="mx-auto w-full max-w-[1080px] p-2">{children}</main>;
};

LayoutBody.displayName = 'LayoutBody';
export default LayoutBody;

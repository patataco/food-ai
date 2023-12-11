import { type PropsWithChildren } from 'react';

const IngredientsSection = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col items-center">{children}</div>;
};
export default IngredientsSection;

import { type PropsWithChildren } from 'react';

const RecipesGroup = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid w-full grid-cols-1 gap-10 px-8 py-6 xs:px-10 md:grid-cols-2  md:px-5">
      {children}
    </div>
  );
};
export default RecipesGroup;

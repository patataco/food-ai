import { type RecipeType } from '~/models';

type InstructionType = Pick<RecipeType, 'instruction'>;

const Instruction = ({ instruction }: InstructionType) => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-2">
      <div className="text-xl font-medium">요리 순서</div>
      <div className="flex flex-col gap-1">
        {instruction.map((item, index) => {
          return (
            <div key={index} className="text-base text-neutral-500 lg:text-lg">
              <span>{`${index + 1}. `}</span>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instruction;

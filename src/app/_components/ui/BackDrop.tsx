import { Spinner } from '~/app/_components/ui/spinner';

const BackDrop = ({ isLoading }: { isLoading: boolean }) => {
  return (
    isLoading && (
      <div className="fixed inset-x-0 bottom-4 top-2 z-50 mx-auto flex max-w-[1016px] bg-transparent md:inset-y-6">
        <div className="mx-6 flex w-full flex-col items-center justify-center bg-gray-400 opacity-90 lg:mx-2">
          <Spinner />
          <div className="flex flex-col items-center justify-center text-xl font-black">
            <span>🍳 레시피를 만들고 있습니다</span>
            <span>잠시만 기다려주세요!</span>
          </div>
        </div>
      </div>
    )
  );
};
export default BackDrop;

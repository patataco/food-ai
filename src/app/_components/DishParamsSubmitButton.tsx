'use client';
import { useRouter } from 'next/navigation';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/app/_components/ui/alert-dialog';
import { Button } from '~/app/_components/ui/button';

type DisParamsSubmitButtonType = {
  open: boolean;
  setOpen: (b: boolean) => void;
};
const DishParamsSubmitButton = ({
  open,
  setOpen,
}: DisParamsSubmitButtonType) => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 py-7">
      <AlertDialog open={open}>
        <AlertDialogTrigger asChild>
          <Button
            type="submit"
            className="flex rounded bg-amber-300 px-16 py-5 text-base font-semibold">
            레시피 요청
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setOpen(false);
              }}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                router.push('/api/auth/signin');
              }}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="font-medium text-yellow-900">
        레시피 조회까지 약 1분 가량 소요됩니다.
      </div>
    </div>
  );
};
export default DishParamsSubmitButton;

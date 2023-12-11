import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '~/app/_components/ui/alert-dialog';

type TrpcErrorAlertProps = {
  alertOpen: boolean;
  setAlertOpen: (b: boolean) => void;
};
const TrpcErrorAlert = ({ alertOpen, setAlertOpen }: TrpcErrorAlertProps) => {
  return (
    <AlertDialog open={alertOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>😢</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col justify-center">
            <span>죄송하지만 응답이 지연되고 있습니다.</span>
            <span>다시 시도해주세요.</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              setAlertOpen(false);
            }}>
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default TrpcErrorAlert;

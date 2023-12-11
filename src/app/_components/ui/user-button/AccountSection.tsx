import GuestUserHeaderSection from '~/app/_components/ui/user-button/GuestUserHeaderSection';
import LoggedInUserHeaderSection from '~/app/_components/ui/user-button/LoggedInUserHeaderSection';
import { cn } from '~/lib/utils';
import { getServerAuthSession } from '~/server/auth';

type AccountSectionProps = {
  className?: string;
};
const AccountSection = async ({ className }: AccountSectionProps) => {
  const session = await getServerAuthSession();

  return (
    <div className={cn(className)}>
      {session ? (
        <LoggedInUserHeaderSection session={session} />
      ) : (
        <GuestUserHeaderSection />
      )}
    </div>
  );
};
export default AccountSection;

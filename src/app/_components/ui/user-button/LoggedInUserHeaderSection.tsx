'use client';
import { LogOut, ScrollText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { type Session } from 'next-auth';
import { signOut } from 'next-auth/react';

import { Button } from '~/app/_components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/app/_components/ui/dropdown-menu';

type LoggedInUserHeaderSectionProps = {
  session: Session;
};
const LoggedInUserHeaderSection = ({
  session,
}: LoggedInUserHeaderSectionProps) => {
  const imgUrl = session.user.image ?? '';
  const router = useRouter();
  const goToUserHistory = () => {
    router.push('/history');
  };
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className="p-0">
          <img src={imgUrl} alt="user" className="h-9 w-9 rounded-full" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={goToUserHistory} className="flex">
            <ScrollText className="mr-2 h-4 w-4" />
            <span>나의 레시피</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>로그아웃</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LoggedInUserHeaderSection;

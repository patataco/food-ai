import Link from 'next/link';

import { Button } from '~/app/_components/ui/button';

const GuestUserHeaderSection = () => {
  return (
    <div>
      <Link href={'/api/auth/signin'}>
        <Button className="p-0 text-base font-bold">로그인</Button>
      </Link>
    </div>
  );
};
export default GuestUserHeaderSection;

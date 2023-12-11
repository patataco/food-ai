'use client';
import { signIn } from 'next-auth/react';

import { Button } from '~/app/_components/ui/button';

const GuestUserHeaderSection = () => {
  function isWebView() {
    const userAgent = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return true;
    } else if (/Android/.test(userAgent)) {
      return true;
    }
    return false;
  }

  const login = async () => {
    if (isWebView()) {
      alert('웹뷰 환경에서 로그인을 시도하고 있습니다.');
    } else {
      await signIn();
    }
  };

  return (
    <div>
      {/*<Link href={'/api/auth/signin'}>*/}
      <Button className="p-0 text-base font-bold" onClick={login}>
        로그인
      </Button>
      {/*</Link>*/}
    </div>
  );
};
export default GuestUserHeaderSection;

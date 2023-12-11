import Link from 'next/link';

import LogoImage from '~/app/_components/LogoImage';
import AccountSection from '~/app/_components/ui/user-button/AccountSection';
import LayoutHeader from '~/app/_layouts/LayoutHeader';

const Header = () => {
  return (
    <LayoutHeader>
      <div className="flex h-full w-full items-center justify-between px-2 md:px-4">
        <Link href={'/'}>
          <LogoImage color="#230F01" width="40" height="40" />
        </Link>
        <ServiceName />
        <AccountSection className="flex items-center" />
      </div>
    </LayoutHeader>
  );
};

export default Header;

export const ServiceName = () => {
  return (
    <div className="text-2xl font-bold xs:hidden">
      Your Recipe By <span className="text-yellow-900">Ai</span>
    </div>
  );
};

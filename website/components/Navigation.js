import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Navigation() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' });

  return isTabletOrMobile ? <MobileNav /> : <DesktopNav />;
}

export default Navigation;

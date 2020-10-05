/**@jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

function Navigation() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return isTabletOrMobile ? <MobileNav /> : <DesktopNav />;
}

export default Navigation;

import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Box } from '@chakra-ui/core';

function Navigation() {
  return (
    <>
      <Box as='span' display={{ base: 'inline', md: 'none' }}>
        <MobileNav />
      </Box>
      <Box as='span' display={{ base: 'none', md: 'inline' }}>
        <DesktopNav />
      </Box>
    </>
  );
}

export default Navigation;

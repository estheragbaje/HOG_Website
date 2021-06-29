import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
// import { useMediaQuery } from "@chakra-ui/react"

function Navigation() {
  const isMobileView = useMediaQuery({query: `(max-width: 790px)`})
  if (isMobileView){
    return <MobileNav />
  }else{
    return <DesktopNav /> 
  }
}

export default Navigation;

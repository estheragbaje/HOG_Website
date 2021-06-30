
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Image, Spacer, Stack, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import DesktopNav from './DesktopNav';
import { SideDrawer } from './SideDrawer';

// import { useMediaQuery } from "@chakra-ui/react"

const MobileNav  = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useRouter();
  return (
    <>
  <Stack direction="row"
    height="70px"
    width="100%"
    // height="100%" 
    // background="red"
    paddingTop="10px"
    paddingBottom="10px"
    paddingLeft="15px"
    paddingRight="10px"
  >
    <Image
      // background="green"
      src="/assets/rccg_logo2.png"
      alt="logo"
      size="50px"
      maxW="60px" />
    <Spacer />

    <IconButton
      aria-label="menu"
      // size={["sm", "lg"]}
      fontSize="xl"
      variant="link"
      _focus={{ borderColor: "white" }}
      color="teal.600"
      onClick={onOpen}
      icon={<HamburgerIcon />} />
      </Stack>

      <SideDrawer isOpen={isOpen} onClose={onClose} /> 
      </>
      );
}


interface PageLayoutProps {
  [propname: string]: any;
}

export const PageLayout = (props: PageLayoutProps) => { 
  const [isMobileView] = useMediaQuery("(min-width: 790px)")

  return (
  <Stack direction="column" width="100%" height="100%" spacing={0} 
  >
    {/* <Navigation /> */}
    <Box width="100%" >
      {isMobileView? <DesktopNav /> : <MobileNav/> }
    </Box>

    <Box width="100%" height="100%">
      {props.children}
    </Box>

  </Stack>
  )
}
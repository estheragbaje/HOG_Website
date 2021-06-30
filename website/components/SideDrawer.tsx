
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel, Box, Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay, Flex, Image
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import MainHeading from "./MainHeading";


interface SideDrawerProps {
  onClose: ()=>void; 
  isOpen: boolean; 
}

export const SideDrawer = ({onClose, isOpen}: SideDrawerProps) => {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader borderBottomWidth="1px">
        <Image
          src="/assets/rccg_logo.png"
          alt="logo"
          marginLeft="20px"
          size="40px"
          maxW="40px"
          objectFit="contain"
          margin="auto"
        />
      </DrawerHeader>
      <DrawerBody color="teal.600">
        <MainHeading
          py={4}
          // borderBottomWidth="1px"
          textAlign="center"
          fontWeight="500"
          _focus={{ borderColor: "white" }}
        >
          <Link href="/">
            <a>HOME</a>
          </Link>
        </MainHeading>

        <MainHeading fontWeight="500" textAlign="center">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <AccordionButton py={4}>
                <Box flex="1" fontWeight="500">
                  ABOUT
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bg="white">
                <Flex direction="column">
                  <Box>
                    <Link href="/about/who_we_are">
                      <a>WHO WE ARE</a>
                    </Link>
                  </Box>
                  <Box marginTop="20px">
                    <Link href="/about/what_we_believe">
                      <a>WHAT WE BELIEVE</a>
                    </Link>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </MainHeading>
        <MainHeading
          py={4}
          borderBottomWidth="1px"
          textAlign="center"
          fontWeight="500"
        >
          {/* <ChakraLink> */}
          <Link href="/services">
            <a>WEEKLY SERVICES</a>
          </Link>
        </MainHeading>
        <MainHeading
          py={4}
          borderBottomWidth="1px"
          textAlign="center"
          fontWeight="500"
        >
          <Link href="/give">
            <a>GIVE</a>
          </Link>
        </MainHeading>
        <MainHeading
          py={4}
          borderBottomWidth="1px"
          textAlign="center"
          fontWeight="500"
        >
          <Link href="/building-project">
            <a>BUILDING PROJECT</a>
          </Link>
        </MainHeading>
        {/* <MainHeading
          py={4}
          borderBottomWidth="1px"
          textAlign="center"
          fontWeight="500"
        >
          <Link href={`${pathname}#contact`}>
            <a>CONTACT</a>
          </Link>
        </MainHeading> */}
      </DrawerBody>
    </DrawerContent>
  </Drawer>

  )
}

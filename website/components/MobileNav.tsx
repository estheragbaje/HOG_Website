import {
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel, Box, Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay, Flex, IconButton, Image,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MainHeading from "./MainHeading";

interface SideDrawerProps {
  onClose: ()=>void; 
  isOpen: boolean; 
}

const SideDrawer = ({onClose, isOpen}: SideDrawerProps) => {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader borderBottomWidth="1px">
        <Image
          src="/assets/rccg_logo.png"
          alt="logo"
          marginLeft="20px"
          size="60px"
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
              <AccordionHeader py={4}>
                <Box flex="1" fontWeight="500">
                  ABOUT
                </Box>
                <AccordionIcon />
              </AccordionHeader>
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

function MobileNav() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { pathname } = useRouter();
	console.log("pathname", pathname);
	// const pathname = "";
	return (

			<Box 
      background="blue"
      width="100vw"
      display="flex"
      flexDirection="row"
      // justifyContent="space-between" 
      // alignItems="center" 
      // marginTop="20px"
      paddingTop="5px"
      paddingBottom="5px"
      paddingRight="15px"
      paddingLeft="20px"
      >
        <Box background="green" maxW="60px">
          <Image
            // background="green"
            src="/assets/rccg_logo2.png"
            alt="logo"
            // marginLeft="20px"
            py={2}
            size="50px"
            maxW="50px"
            maxH ="50px"
            objectFit="contain"
          />
        </Box>
		
        
				<IconButton
					aria-label="menu"
					size={["sm", "lg"]}
					fontSize="xl"
					variant="link"
					_focus={{ borderColor: "white" }}
					color="teal.600"
					onClick={onOpen}
					icon={AiOutlineMenu}
				/>
			</Box>
		
	);
}

export default MobileNav;

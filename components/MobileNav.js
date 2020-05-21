import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  useDisclosure,
  Flex,
  Link as ChakraLink,
} from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MainHeading from '../components/MainHeading';

function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Image src="/assets/logo.png" alt="logo" size="80px" padding={4} />
        <Button variantColor="white" onClick={onOpen}>
          <Box as={AiOutlineMenu} size="40px" />
        </Button>
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Image src="/assets/logo.png" alt="logo" margin="auto" />
          </DrawerHeader>
          <DrawerBody>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              <ChakraLink>
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </ChakraLink>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              <ChakraLink>
                <Link href="/about">
                  <a>ABOUT</a>
                </Link>
              </ChakraLink>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              <ChakraLink>
                <Link href="/events">
                  <a>EVENTS</a>
                </Link>
              </ChakraLink>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              <ChakraLink>
                <Link href="/sermons">
                  <a>SERMONS</a>
                </Link>
              </ChakraLink>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              <ChakraLink>
                <Link href="/services">
                  <a>WEEKLY SERVICES</a>
                </Link>
              </ChakraLink>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              <ChakraLink>
                <Link href="/give">
                  <a>GIVE</a>
                </Link>
              </ChakraLink>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth="1px"
              textAlign="center"
              fontWeight="500"
            >
              <ChakraLink>
                <Link href="/contact">
                  <a>CONTACT</a>
                </Link>
              </ChakraLink>
            </MainHeading>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileNav;

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
  Menu,
  MenuButton,
  MenuList,
  Icon,
  MenuItem,
  Stack,
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
      <Flex justifyContent='space-between' alignItems='center'>
        <Image
          src='/assets/rccg_logo.png'
          alt='logo'
          marginLeft='20px'
          py={2}
          size='50px'
          objectFit='contain'
        />
        <Button variantColor='white' onClick={onOpen}>
          <Box
            as={AiOutlineMenu}
            size='24px'
            color='teal.600'
            marginRight='20px'
          />
        </Button>
      </Flex>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>
            <Image
              src='/assets/rccg_logo.png'
              alt='logo'
              marginLeft='20px'
              size='60px'
              objectFit='contain'
              margin='auto'
            />
          </DrawerHeader>
          <DrawerBody color='teal.600'>
            <MainHeading
              py={4}
              borderBottomWidth='1px'
              textAlign='center'
              fontWeight='500'
            >
              <Link href='/'>
                <a>HOME</a>
              </Link>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth='1px'
              textAlign='center'
              fontWeight='500'
            >
              <Menu>
                <MenuButton
                  transition='all 0.2s'
                  rounded='md'
                  _hover={{ bg: 'transparent' }}
                  _expanded={{ bg: 'red.200' }}
                  _focus={{ outline: 0, boxShadow: 'outline' }}
                  rightIcon='chevron-down'
                  as='a'
                >
                  ABOUT
                  <Icon name='chevron-down' />
                </MenuButton>

                <MenuList _hover={{ bg: 'teal.500' }} color='black'>
                  <MenuItem as='a' href='/about/who_we_are'>
                    WHO WE ARE
                  </MenuItem>
                  <MenuItem as='a' href='/about/what_we_believe'>
                    WHAT WE BELIEVE
                  </MenuItem>
                  <MenuItem as='a' href='/about/our_departments'>
                    OUR DEPARTMENTS
                  </MenuItem>
                </MenuList>
              </Menu>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth='1px'
              textAlign='center'
              fontWeight='500'
            >
              <Link href='/events'>
                <a>EVENTS</a>
              </Link>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth='1px'
              textAlign='center'
              fontWeight='500'
            >
              <Link href='/sermons'>
                <a>SERMONS</a>
              </Link>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth='1px'
              textAlign='center'
              fontWeight='500'
            >
              {/* <ChakraLink> */}
              <Link href='/services'>
                <a>WEEKLY SERVICES</a>
              </Link>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth='1px'
              textAlign='center'
              fontWeight='500'
            >
              <Link href='/give'>
                <a>GIVE</a>
              </Link>
            </MainHeading>
            <MainHeading
              py={4}
              borderBottomWidth='1px'
              textAlign='center'
              fontWeight='500'
            >
              <Link href='/contact'>
                <a>CONTACT</a>
              </Link>
            </MainHeading>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileNav;

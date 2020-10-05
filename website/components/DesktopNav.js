import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  PseudoBox,
  Stack,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

function NavLink({ href, children }) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  const hoverStyle = {
    bg: 'teal.600',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  return (
    <Link href={href} passHref>
      <PseudoBox
        as='a'
        color='teal.600'
        padding='10px'
        backgroundColor='transparent'
        borderRadius='8px'
        _hover={hoverStyle}
        {...(isActive && hoverStyle)}
      >
        {children}
      </PseudoBox>
    </Link>
  );
}

function SubmenuLink({ href, children, ...rest }) {
  return (
    <Link href={href}>
      <MenuItem _hover={{ bg: 'teal.500' }} {...rest}>
        {children}
      </MenuItem>
    </Link>
  );
}

function DesktopNav() {
  const { pathname } = useRouter();

  const hoverStyle = {
    bg: 'teal.600',
    color: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  return (
    <Box>
      <Box
        boxShadow='0 1px 4px rgba(23,25,27,0.05)'
        position='sticky'
        top={0}
        zIndex={1}
        width='100%'
        backgroundColor='white'
      >
        <Box>
          <Flex
            justifyContent='space-between'
            alignItems='center'
            padding={4}
            color='white'
          >
            <a href='/'>
              <Image
                src='/assets/rccg_logo.png'
                alt='logo'
                marginLeft='20px'
                size='60px'
                objectFit='cover'
              />
            </a>
            <Stack
              isInline={true}
              spacing='50px'
              paddingRight='50px'
              textAlign='center'
              shouldWrapChildren
            >
              <NavLink href='/'>HOME</NavLink>
              <Menu>
                {({ onClose }) => (
                  <>
                    <MenuButton
                      as={Button}
                      rightIcon='chevron-down'
                      as='a'
                      color='teal.500'
                    >
                      <PseudoBox
                        as='a'
                        color='teal.600'
                        padding='10px'
                        backgroundColor='transparent'
                        borderRadius='8px'
                        _hover={hoverStyle}
                        {...(pathname.startsWith('/about') && hoverStyle)}
                      >
                        ABOUT
                        <Icon name='chevron-down' />
                      </PseudoBox>
                    </MenuButton>

                    <MenuList color='teal.600' zIndex={2} position='absolute'>
                      <SubmenuLink href='/about/who_we_are' onClick={onClose}>
                        WHO WE ARE
                      </SubmenuLink>
                      <SubmenuLink
                        href='/about/what_we_believe'
                        onClick={onClose}
                      >
                        WHAT WE BELIEVE
                      </SubmenuLink>
                      <SubmenuLink
                        href='/about/our_departments'
                        onClick={onClose}
                      >
                        OUR DEPARTMENTS
                      </SubmenuLink>
                    </MenuList>
                  </>
                )}
              </Menu>

              <NavLink href='/events'>EVENTS</NavLink>
              <NavLink href='/sermons'>SERMONS</NavLink>
              <NavLink href='/services'>WEEKLY SERVICES</NavLink>
              <NavLink href='/give'>GIVE</NavLink>
              <NavLink href='/contact'>CONTACT</NavLink>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default DesktopNav;

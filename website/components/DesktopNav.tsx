import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Appearance } from './Appearance';

const footerColor = Appearance.primaryColor;

interface HoverBoxProps {
  isActive: boolean;
  children: any;
}
const HoverBox = ({ children, isActive }: HoverBoxProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      // background="red"
      padding='5px'
    >
      <Text
        color={isHover || isActive ? footerColor : 'gray.600'}
        fontWeight={isHover || isActive ? 'bold' : 'bold'}
        fontSize='13px'
      >
        {children}
      </Text>
      <Box
        height='2px'
        background={isHover || isActive ? footerColor : 'transparent'}
      />
    </Box>
  );
};

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
    <Link href={href}>
      <a>
        <HoverBox isActive={isActive}>{children}</HoverBox>
      </a>
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

interface SubmenuItem {
  href: string;
  text: string;
}

interface NavLinkWithDropDownProps {
  isActive: boolean;
  submenuItemsList: SubmenuItem[];
}
const NavLinkWithDropDown = ({
  isActive,
  submenuItemsList,
}: NavLinkWithDropDownProps) => {
  return (
    <Menu>
      <MenuButton>
        <HoverBox isActive={isActive}>
          ABOUT US <ChevronDownIcon />
        </HoverBox>
      </MenuButton>

      <MenuList>
        {submenuItemsList.map((el, index) => (
          <SubmenuLink key={index} href={el.href}>
            {el.text}
          </SubmenuLink>
          // <MenuItem>{el.text}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

function DesktopNav() {
  const { pathname } = useRouter();

  // const hoverStyle = {
  // 	bg: "teal.600",
  // 	color: "white",
  // 	borderRadius: "8px",
  // 	cursor: "pointer",
  // 	transition: "all 0.2s",
  // };

  return (
    <Stack
      // background="green"
      alignItems='center'
      direction='row'
      height='90px'
      width='100%'
      paddingLeft='60px'
      paddingRight='60px'
      paddingTop='25px'
      paddingBottom='25px'
    >
      {/* <NavLogo href="/" />  */}
      <Image
        // background="green"
        src='/assets/rccg_logo2.png'
        alt='logo'
        boxSize='50px'
        maxW='60px'
      />

      <Spacer />
      <Stack
        // isInline={true}
        direction='row'
        spacing='30px'
        textAlign='center'
        shouldWrapChildren
        alignItems='center'
      >
        <NavLink href='/'>HOME</NavLink>

        <NavLinkWithDropDown
          isActive={pathname.startsWith('/about')}
          submenuItemsList={[
            { href: '/about/who_we_are', text: 'WHO WE ARE' },
            { href: '/about/what_we_believe', text: 'WHAT WE BELIEVE' },
          ]}
        />

        <NavLink href='/services'>WEEKLY SERVICES</NavLink>
        <NavLink href='/give'>GIVE</NavLink>
        <NavLink href='/building-project'> BUILDING PROJECT </NavLink>
        <NavLink href={`${pathname}#contact`}>CONTACT</NavLink>
      </Stack>
    </Stack>
  );
}

export default DesktopNav;

import { Image } from '@chakra-ui/react';
import React from 'react';

interface NavLogoProps {
  href: string;
}

export const NavLogo = (props: NavLogoProps) => {
  const maxSize = '60px';
  return (
    <a href={props.href}>
      <Image
        src='/assets/rccg_logo.png'
        alt='logo'
        width={maxSize}
        height={maxSize}
        // maxWidth={maxSize}
        // maxH={maxSize}
        // size={["40px", "60px"]}
        // objectFit="cover"
      />
    </a>
  );
};

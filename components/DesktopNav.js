import React from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Stack,
  Text,
  Image,
  Link as ChakraLink,
} from '@chakra-ui/core';

function DesktopNav() {
  return (
    <Box>
      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          padding={10}
          color="white"
          maxWidth="1200px"
        >
          <Image src="/assets/logo.png" alt="logo" paddingRight="10px" />
          <Stack
            isInline={true}
            spacing="60px"
            textAlign="center"
            shouldWrapChildren
          >
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
            <Link href="/events">
              <a>EVENTS</a>
            </Link>
            <Link href="/sermons">
              <a>SERMONS</a>
            </Link>
            <Link href="/services">
              <a>WEEKLY SERVICES</a>
            </Link>
            <Link href="/give">
              <a>GIVE</a>
            </Link>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}

export default DesktopNav;

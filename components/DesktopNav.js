import React from 'react';
import { Box, Flex, Stack, Text, Image } from '@chakra-ui/core';

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
          <Stack isInline={true} spacing="60px" textAlign="center">
            <Text>HOME</Text>
            <Text>ABOUT</Text>
            <Text>SERMONS</Text>
            <Text>WEEKLY SERVICES</Text>
            <Text>GIVE</Text>
            <Text>CONTACT</Text>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}

export default DesktopNav;

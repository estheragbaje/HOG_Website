import React from 'react';
import { Box, Flex, Stack, Text, Image } from '@chakra-ui/core';

function Navigation() {
  return (
    <Box>
      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          padding={10}
          color="white"
        >
          <Image src="/assets/logo.png" alt="logo" />
          <Stack isInline={true} spacing="60px">
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

export default Navigation;

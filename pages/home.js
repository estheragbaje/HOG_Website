import React from 'react';
import {
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Heading,
  Button,
} from '@chakra-ui/core';

function home(props) {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="93%"
        py={4}
      >
        <Image src="public/assets/logo.png" alt="logo" />
        <Stack isInline={true} spacing="60px">
          <Text>HOME</Text>
          <Text>ABOUT</Text>
          <Text>SERMONS</Text>
          <Text>WEEKLY SERVICES</Text>
          <Text>GIVE</Text>
          <Text>CONTACT</Text>
        </Stack>
      </Flex>
      <Box textAlign="center" marginTop={150}>
        <Text color="#3AC7B1" fontSize="26px">
          Welcome to Redeemed Christian Church of God
        </Text>
        <Heading fontSize={7} margin="15px">
          THE PLACE TO BE
        </Heading>
        <Text fontSize="26px">Worship with us Sundays at 9:30am</Text>
        {/* <Button backgroundColor="#3AC7B1" color="white">
          Button
        </Button> */}
      </Box>
    </Box>
  );
}

export default home;

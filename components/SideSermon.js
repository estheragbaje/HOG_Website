import React from 'react';
import { Text, Stack, Box, Flex } from '@chakra-ui/core';
import { BigDate } from './Common';

function SideSermon({ service, topic, date, isActive, month, ...rest }) {
  return (
    <Box
      backgroundColor={isActive ? '#F9FFFE' : '#F7F8F7'}
      minWidth="490px"
      border="solid 2px"
      borderColor={isActive ? '#3AC7B1' : 'transparent'}
      borderRadius="5px"
      marginBottom="16px"
      paddingY={3}
      as="button"
      {...rest}
    >
      <Stack direction="row" spacing="50px">
        <BigDate bg="white" date={date} month={month} />
        <Stack>
          <Text fontStyle="italic">{service}</Text>
          <Text>{topic}</Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SideSermon;

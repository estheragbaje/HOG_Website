import React from 'react';
import { Text, Stack, Box, Flex, PseudoBox } from '@chakra-ui/core';
import { BigDate } from './Common';

function SideSermon({ service, topic, date, isActive, month, ...rest }) {
  return (
    <PseudoBox
      backgroundColor='gray.50'
      border='solid 1px'
      borderColor='gray.500'
      _hover={{
        borderColor: '#3AC7B1',
      }}
      borderRadius='5px'
      paddingY={3}
      marginY={2}
      as='button'
      {...rest}
    >
      <Stack direction='row'>
        <BigDate bg='white' date={date} month={month} />
        <Stack textAlign='left'>
          <Text fontStyle='italic' fontWeight='500' color='#3AC7B1'>
            {service}
          </Text>
          <Text fontWeight='600'>{topic}</Text>
        </Stack>
      </Stack>
    </PseudoBox>
  );
}

export default SideSermon;

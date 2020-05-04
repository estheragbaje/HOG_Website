import React from 'react';
import { Icon, Heading, Box, Text } from '@chakra-ui/core';
import SubHeading from './SubHeading';

function IconCard({
  heading,
  subheading,
  content,
  borderColor = 'green.600',
  ...rest
}) {
  return (
    <Box
      backgroundColor="#fff"
      borderBottom="solid 6px"
      width="340px"
      textAlign="center"
      padding="30px"
      margin="0 auto"
      borderColor={borderColor}
      {...rest}
    >
      <Heading fontSize="21px">{heading}</Heading>
      <SubHeading color="#3AC7B1" marginTop="20px">
        {subheading}
      </SubHeading>
      <Text>{content}</Text>
    </Box>
  );
}

export default IconCard;

import React from 'react';
import { Heading } from '@chakra-ui/core';

function SubHeading({ children, fontSize, color, ...rest }) {
  return (
    <Heading
      color={color}
      fontFamily="subheading"
      fontSize={fontSize}
      fontStyle="italic"
      fontWeight="500"
      marginBottom="24px"
      {...rest}
    >
      {children}
    </Heading>
  );
}

export default SubHeading;

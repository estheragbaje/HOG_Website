import React from 'react';
import { Heading } from '@chakra-ui/core';

function SubHeading({ children, fontSize, color, ...rest }) {
  return (
    <Heading color={color} fontSize={fontSize} fontStyle="italic" marginBottom="24px"{...rest}>
      {children}
    </Heading>
  );
}

export default SubHeading;

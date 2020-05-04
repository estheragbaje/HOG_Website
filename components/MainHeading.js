import React from 'react';
import { Heading } from '@chakra-ui/core';

function MainHeading({ children, fontSize, color, ...rest }) {
  return (
    <Heading color={color} fontSize={fontSize} {...rest}>
      {children}
    </Heading>
  );
}

export default MainHeading;

import React, { Children } from 'react';
import { Box, Button, Stack, Heading, Divider } from '@chakra-ui/core';

export function CustomButton({
  content,
  width,
  height,
  variant,
  variantColor,
  ...rest
}) {
  return (
    <Box>
      <Button
        width={width}
        height={height}
        variant={variant}
        variantColor={variantColor}
        {...rest}
      >
        {content}
      </Button>
    </Box>
  );
}

export function BigDate({ month, date, ...rest }) {
  return (
    <Box>
      <Stack textAlign="center" bg="white" marginX="40px" px={6} py={2}>
        <Heading color="#3AC7B1" size="sm">
          {month}
        </Heading>
        <Heading size="lg">{date}</Heading>
      </Stack>
    </Box>
  );
}

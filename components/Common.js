import React, { Children } from 'react';
import {
  Box,
  Button,
  Stack,
  Heading,
  Text,
  Flex,
  Image,
  PseudoBox,
} from '@chakra-ui/core';
import MainHeading from './MainHeading';

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

export function FlexCard({ src, alt, heading, children, ...rest }) {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      justifyContent="space-between"
      margin={['0 40px', '0 40px', '0 80px']}
      paddingY="80px"
      {...rest}
    >
      <Box px={4}>
        <MainHeading color="#3AC7B1" fontSize={['24px', '24px', '36px']}>
          {heading}
        </MainHeading>
        <Text fontSize={['16px', '16px', '18px']} py={4}>
          {children}
        </Text>
      </Box>
      <Image src={src} alt={alt} objectFit="contain" width="550px" px={4} />
    </Flex>
  );
}

export function TextImage({ src, alt, content, ...rest }) {
  return (
    <Box {...rest} position="relative" textAlign="center">
      <Image
        src={src}
        alt={alt}
        width="385px"
        minHeight="290"
        objectFit="contain"
        position="relative"
        textAlign="center"
      />

      <MainHeading
        position="absolute"
        zIndex="999"
        top="50%"
        left="50%"
        transform="translate(-50%, -10%)"
        // margin="0 auto"
        // left="0"
        // right="0"
        // top="40%"
        textAlign="center"
        width="60%"
      >
        USHER
      </MainHeading>
    </Box>
  );
}

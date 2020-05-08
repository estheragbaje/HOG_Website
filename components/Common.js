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
  Icon,
  SimpleGrid,
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
      <Box minW="300px">
        <MainHeading color="#3AC7B1" fontSize={['24px', '24px', '36px']}>
          {heading}
        </MainHeading>
        <Text fontSize={['16px', '16px', '18px']} py={4}>
          {children}
        </Text>
      </Box>
      <Box size={['24px', '24px', '50px']} flexShrink="0"></Box>
      <Image
        src={src}
        alt={alt}
        maxWidth="550px"
        objectFit="cover"
        // flexShrink="0"
        borderRadius="10px"
      />
    </Flex>
  );
}

export function TextImage({ src, alt, content, ...rest }) {
  return (
    <Box {...rest} position="relative" textAlign="center">
      <Box
        backgroundImage={`url(${src}) `}
        backgroundSize="cover"
        backgroundColor="gray.700"
        minHeight={['220px', '220px', '290px']}
        style={{ backgroundBlendMode: 'overlay' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <MainHeading color="white" fontSize={['21px', '21px', '32px']}>
          {content}
        </MainHeading>
      </Box>
    </Box>
  );
}

export function IconText({ name, content, ...rest }) {
  return (
    <SimpleGrid
      {...rest}
      textAlign={['left', 'left', 'center']}
      columns={['2', '2', '1']}
      maxWidth="300px"
      py={2}
    >
      <Icon name={name} size={['20px', '20px', '25px']} margin="auto" />
      <Text
        py={4}
        color="#3AC7B1"
        fontSize={['18px', '18px', '21px']}
        px={['10px', '10px', 0]}
      >
        {content}
      </Text>
    </SimpleGrid>
  );
}

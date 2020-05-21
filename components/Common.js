import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';
import MainHeading from './MainHeading';
import SubHeading from './SubHeading';

export function CustomButton({
  href,
  content,
  width,
  height,
  variant,
  variantColor,
  ...rest
}) {
  return (
    <ChakraLink href={href}  textDecoration="none">
      {/* <Link href={href}> */}
      <Button
        width={width}
        height={height}
        variant={variant}
        variantColor={variantColor}
        {...rest}
      >
        {content}
      </Button>
      {/* </Link> */}
    </ChakraLink>
  );
}

export function BigDate({ month, date, ...rest }) {
  return (
    <Box>
      <Stack textAlign="center" bg="white" marginX="40px" px={6} py={2}>
        <Heading color="#3AC7B1" size="sm">
          {month}
        </Heading>
        <Heading fontSize={['24px', '24px', '32px']}>{date}</Heading>
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

export function EventCard({ src, alt, title, date, time, ...rest }) {
  return (
    <Box
      border="1px solid #C4C4C4"
      // maxWidth="550px"
      borderRadius="10px"
      {...rest}
    >
      <Image
        src={src}
        alt={alt}
        objectFit="cover"
        borderRadius="10px"
        // minWidth="630px"
      />
      <Stack padding="30px">
        <MainHeading fontSize={['18px', '18px', '24px']}>{title}</MainHeading>
        <SubHeading fontSize="16px" color="#3AC7B1" py={2}>
          {date}
        </SubHeading>
        <Text>{time}</Text>
      </Stack>
    </Box>
  );
}

export function EventIcon({ name, content, ...rest }) {
  return (
    <Box>
      <SimpleGrid
        {...rest}
        textAlign={['left', 'left', 'center']}
        // spacing={6}
        columns={2}
        maxWidth="150px"
        py={2}
      >
        <Icon
          name={name}
          size={['16px', '16px', '20px']}
          margin="auto"
          color="#3AC7B1"
        />
        <Text
          py={4}
          fontSize={['16px', '16px', '18px']}
          px={['10px', '10px', 0]}
        >
          {content}
        </Text>
      </SimpleGrid>
    </Box>
  );
}

export function MessageCard({ src, topic, date, minister, day, ...rest }) {
  return (
    <Box {...rest}>
      {src ? <Image src={src} alt={topic} objectFit="contain" /> : null}
      <Box
        padding="10px"
        border="1px solid #C4C4C4"
        borderRadius="5px"
        textAlign="left"
      >
        <MainHeading fontSize={['16px', '16px', '18px']} py={2}>
          {topic}
        </MainHeading>
        <SubHeading color="#3AC7B1">{date}</SubHeading>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{minister}</Text>
          <Text
            padding="5px"
            fontSize="14px"
            color="#7C7C7C"
            border="1px solid #C4C4C4"
            borderRadius="5px"
          >
            {day}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

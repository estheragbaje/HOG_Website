import {
  AspectRatioBox,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Icon,
  Image,
  Input,
  PseudoBox,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/core';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';
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
    <Button
      as='a'
      width={width}
      height={height}
      variant={variant}
      variantColor={variantColor}
      {...rest}
    >
      {content}
    </Button>
  );
}

export function BigDate({ month, date, ...rest }) {
  return (
    <Box
      textAlign={['left', 'left', 'center']}
      marginX='40px'
      px={[0, 4, 6]}
      py={2}
    >
      <Stack isInline align='center' spacing='1'>
        <Box as={BiCalendar} mt='-2px' size='18px' color='teal.400' />
        <Text>Date</Text>
      </Stack>
      <Heading fontSize={['16px', '16px', '20px']}>{date}</Heading>
    </Box>
  );
}

export function FlexCard({ src, alt, heading, children, ...rest }) {
  return (
    <Flex
      direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
      justifyContent='space-between'
      paddingY='40px'
      {...rest}
    >
      <Box minW='300px'>
        <MainHeading color='#3AC7B1' fontSize={['24px', '24px', '28px']}>
          {heading}
        </MainHeading>
        <Text fontSize={['16px', '16px', '18px']} py={4}>
          {children}
        </Text>
      </Box>
      <Box size={['24px', '24px', '50px']} flexShrink='0'></Box>
      <Image
        src={src}
        alt={alt}
        maxWidth='300px'
        objectFit='cover'
        borderRadius='10px'
      />
    </Flex>
  );
}

export function TextImage({ src, alt, content, backgroundColor, ...rest }) {
  return (
    <Box {...rest} position='relative' textAlign='center'>
      <Box
        backgroundImage={`url(${src}) `}
        backgroundSize='cover'
        backgroundColor={backgroundColor}
        minHeight={['220px', '220px', '290px']}
        style={{ backgroundBlendMode: 'overlay' }}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <MainHeading color='white' fontSize={['21px', '21px', '32px']}>
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
      textAlign={['left', 'left', 'left']}
      columns={['1', '1', '1']}
      maxWidth='300px'
      py={2}
    >
      <Icon name={name} size={['20px', '20px', '25px']} textAlign='left' />
      <Text py={4} color='#3AC7B1' fontSize={['14px', '18px', '21px']}>
        {content}
      </Text>
    </SimpleGrid>
  );
}

export function EventCard({ src, alt, title, date, time, ...rest }) {
  return (
    <PseudoBox
      borderRadius='10px'
      cursor='pointer'
      _hover={{
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      {...rest}
    >
      <Image
        src={src}
        alt={alt}
        objectFit='cover'
        height='300px'
        width='100%'
        borderTopLeftRadius='10px'
        borderTopRightRadius='10px'
      />
      <Stack
        padding='30px'
        border='1px solid #C4C4C4'
        borderBottomLeftRadius='10px'
        borderBottomRightRadius='10px'
      >
        <MainHeading
          fontSize={['18px', '18px', '24px']}
          textTransform='uppercase'
        >
          {title}
        </MainHeading>
        <SubHeading fontSize='16px' color='#3AC7B1' py={2}>
          {date}
        </SubHeading>
        <Text>{time}</Text>
      </Stack>
    </PseudoBox>
  );
}

export function EventIcon({ name, content, ...rest }) {
  return (
    <Box textAlign='left' minW={['250px', '0px', '0px']}>
      <Flex {...rest} alignItems='center' py={2}>
        <Icon name={name} size='20px' color='#3AC7B1' />
        <Text py={4} fontSize={['16px', '16px', '18px']} px={[2, 2, 4]}>
          {content}
        </Text>
      </Flex>
    </Box>
  );
}

export function MessageCard({ src, topic, date, minister, day, ...rest }) {
  return (
    <PseudoBox
      {...rest}
      flex='1'
      _hover={{
        cursor: 'pointer',
      }}
    >
      <AspectRatioBox ratio={4 / 3}>
        <Box as='iframe' title={topic} src={src} allowFullScreen />
      </AspectRatioBox>
      <Box
        padding='10px'
        border='1px solid #C4C4C4'
        borderBottomLeftRadius='5px'
        borderBottomRightRadius='5px'
        height='160px'
      >
        <MainHeading fontSize={['16px', '16px', '18px']} py={2} flex='1'>
          {topic}
        </MainHeading>
        <SubHeading color='#3AC7B1'>{date}</SubHeading>

        <Text>{minister}</Text>
      </Box>
    </PseudoBox>
  );
}

function InputForm({
  placeholder,
  name,
  type,
  label,
  isInvalid,
  error,
  ...rest
}) {
  return (
    <FormControl isInvalid={isInvalid} paddingY={2}>
      <Input
        placeholder={placeholder}
        label={label}
        name={name}
        type={type}
        backgroundColor='white'
        focusBorderColor='#3AC7B1'
        errorBorderColor='crimson'
        variant='filled'
        {...rest}
      />
      <FormErrorMessage fontFamily='body'>{error}</FormErrorMessage>
    </FormControl>
  );
}

export default InputForm;

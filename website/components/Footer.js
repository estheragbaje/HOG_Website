import {
  Box,
  Button,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/core';
import { useFormik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import * as yup from 'yup';
import { SocialLink } from './Links';
import MainHeading from './MainHeading';
import SubHeading from './SubHeading';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup.string().email().required('Please enter your email'),
  message: yup
    .string()
    .required('Please enter a message')
    .min(2, 'Message must be at least 2 characters'),
});

export function ContactForm({ onSubmit, ...rest }) {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const nameProps = formik.getFieldProps('name');
  const emailProps = formik.getFieldProps('email');
  const messageProps = formik.getFieldProps('message');

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box {...rest}>
        <Box minWidth='45%' margin='auto'>
          <Stack spacing={4}>
            <Input
              placeholder='Name'
              label='Name'
              type='text'
              size='lg'
              focusBorderColor='#3AC7B1'
              paddingY={8}
              error={formik.errors.name}
              errorBorderColor='crimson'
              {...nameProps}
            />

            <Input
              placeholder='Email'
              size='lg'
              label='Email'
              type='email'
              focusBorderColor='#3AC7B1'
              paddingY={8}
              errorBorderColor='crimson'
              error={formik.errors.email}
              {...emailProps}
            />

            <Textarea
              placeholder='Message'
              size='lg'
              label='Message'
              type='text'
              focusBorderColor='#3AC7B1'
              errorBorderColor='crimson'
              error={formik.errors.message}
              {...messageProps}
            />
          </Stack>

          <Button
            type='submit'
            height={['44px', '44px', '55px']}
            px={['20px', '20px', '30px']}
            bg='#3AC7B1'
            _hover={{ bg: '#1FBDA5' }}
            _focus='teal.800'
            fontSize={['16px', '16px', '21px']}
            fontWeight='400'
            color='white'
            disabled={!(formik.isValid && formik.dirty)}
            children='SEND'
            my={10}
          />
        </Box>
      </Box>
    </form>
  );
}

export function FooterText({ ...rest }) {
  return (
    <Box {...rest}>
      <Box textAlign={['center', 'left', 'left']}>
        <Image
          src='/assets/rccg_logo.png'
          alt='logo'
          size='60px'
          margin={['auto', 'auto', '0']}
        />
        <Text color='white' py={[3, 3, 4]}>
          Welcome to the Redeemed Christian Church of God House of Grace, Corpus
          Christi! We are so overwhelmed with Joy that God has brought you here.
        </Text>
        <MainHeading
          color='white'
          fontSize='24px'
          display={['none', 'none', 'block']}
        >
          CONNECT WITH US
        </MainHeading>
      </Box>
      <SimpleGrid
        listStyleType='none'
        columns={3}
        color='white'
        py={3}
        mx={['auto', 'auto', 0]}
        paddingBottom={[8, 8, 0]}
        textAlign={['center', 'center', 'left']}
        maxWidth='300px'
      >
        <SocialLink
          icon={FaFacebook}
          label='facebook'
          link='https://www.facebook.com/RCCGCORPUS'
        />
        <SocialLink
          icon={FaYoutube}
          label='instagram'
          link='https://www.youtube.com/channel/UCXxVxc0iUgYaOvLWbsg0V-g'
        />
      </SimpleGrid>
    </Box>
  );
}

export function Footer() {
  return (
    <Box backgroundColor='#61817C'>
      <Box backgroundColor='#61817C' width='100%' maxW='1600px' margin='auto'>
        <Box margin={['0 40px', '0 40px', '0 80px']} paddingTop='80px'>
          <SubHeading color='white' marginBottom='16px'>
            We would love to hear from you
          </SubHeading>
          <MainHeading
            color='white'
            fontSize='36px'
            fontSize={['24px', '24px', '36px']}
            py={4}
          >
            CONTACT US
          </MainHeading>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: '2', lg: 2 }}
          spacing={[16, 16, 32]}
          margin={['0 40px', '0 40px', '0 80px']}
        >
          <ContactForm paddingBottom={['0', '0', '40px']} />
          <FooterText />
        </SimpleGrid>
      </Box>
      <Box
        backgroundColor='#56706C'
        textAlign='center'
        color='white'
        fontSize='12px'
        py={6}
      >
        <SubHeading marginBottom='0px' paddingX={['40px', '40px', '80px']}>
          © 2020 RCCG House of Grace, Texas | ️ Made with love by Esther Agbaje
        </SubHeading>
      </Box>
    </Box>
  );
}

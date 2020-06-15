import {
  Box,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import * as yup from 'yup';
import { CustomButton } from './Common';
import { SocialLink } from './Links';
import MainHeading from './MainHeading';
import SubHeading from './SubHeading';

export function FormStack({ ...rest }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Please enter your name'),
      email: yup.string().email().required('Please enter your email'),
      message: yup.string().required('Please enter a message'),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box {...rest}>
        <Box minWidth="45%">
          <Stack spacing={4}>
            <Input
              placeholder="Name"
              size="lg"
              focusBorderColor="#3AC7B1"
              paddingY={8}
              onChange={formik.handleChange}
              value={formik.values.name}
              errorBorderColor="crimson"
              error={formik.errors.name}
              onBlur={formik.handleBlur}
              touchedName={formik.touched.name}
            />
            <Input
              placeholder="Email"
              size="lg"
              focusBorderColor="#3AC7B1"
              paddingY={8}
              onChange={formik.handleChange}
              value={formik.values.email}
              errorBorderColor="crimson"
              error={formik.errors.email}
              onBlur={formik.handleBlur}
              touchedName={formik.touched.email}
            />
            <Textarea
              placeholder="Message"
              size="lg"
              focusBorderColor="#3AC7B1"
              onChange={formik.handleChange}
              value={formik.values.message}
              errorBorderColor="crimson"
              error={formik.errors.message}
              onBlur={formik.handleBlur}
              touchedName={formik.touched.message}
            />
          </Stack>

          <CustomButton
            type="submit"
            height={['44px', '44px', '55px']}
            width="156px"
            bg="#3AC7B1"
            _hover={{ bg: '#1FBDA5' }}
            _focus="teal.800"
            fontSize={['16px', '16px', '21px']}
            fontWeight="400"
            color="white"
            content="SEND"
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
          src="/assets/logo.png"
          alt="logo"
          margin={['auto', 'auto', '0']}
        />
        <Text color="white" py={[3, 3, 4]}>
          Welcome to the Redeemed Christian Church of God House of Grace, Corpus
          Christi! We are so overwhelmed with Joy that God has brought you here.
        </Text>
        <MainHeading
          color="white"
          fontSize="24px"
          display={['none', 'none', 'block']}
        >
          CONNECT WITH US
        </MainHeading>
      </Box>
      <SimpleGrid
        listStyleType="none"
        columns={3}
        color="white"
        py={3}
        mx={['auto', 'auto', 0]}
        paddingBottom={[8, 8, 0]}
        textAlign={['center', 'center', 'left']}
        maxWidth="300px"
      >
        <SocialLink icon={FaFacebook} label="facebook" />
        <SocialLink icon={FaInstagram} label="instagram" />
        <SocialLink icon={FaTwitter} label="twitter" />
      </SimpleGrid>
    </Box>
  );
}

export function Footer() {
  return (
    <Box backgroundColor="#61817C" width="100%">
      <Box margin={['0 40px', '0 40px', '0 80px']} paddingTop="80px">
        <SubHeading color="white" marginBottom="16px">
          We would love to hear from you
        </SubHeading>
        <MainHeading
          color="white"
          fontSize="36px"
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
        <FormStack paddingBottom={['0', '0', '40px']} />
        <FooterText />
      </SimpleGrid>
      <Box
        backgroundColor="#56706C"
        textAlign="center"
        color="white"
        fontSize="12px"
        py={6}
      >
        <SubHeading marginBottom="0px">
          © 2020 RCCG House of Grace, Texas | ️ Made with love by Esther Agbaje
        </SubHeading>
      </Box>
    </Box>
  );
}
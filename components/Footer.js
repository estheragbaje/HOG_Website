import React, { useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  Input,
  Textarea,
  Button,
  Image,
  Text,
  Icon,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/core';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import SubHeading from './SubHeading';
import MainHeading from './MainHeading';
import { SocialLink } from './Links';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { CustomButton } from './Common';

function Footer() {
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
      <Box backgroundColor="#61817C" width="100%" px={10} paddingTop={16}>
        <SubHeading color="white" marginBottom="16px">
          We would love to hear from you
        </SubHeading>
        <MainHeading color="white" fontSize="36px" marginBottom="28px">
          CONTACT US
        </MainHeading>
        <SimpleGrid columns={2} spacing={32}>
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
              height="56px"
              width="156px"
              bg="#3AC7B1"
              _hover={{ bg: '#1FBDA5' }}
              _focus="teal.800"
              fontSize="21px"
              fontWeight="400"
              color="white"
              content="SEND"
              my={10}
            />
          </Box>
          <Box>
            <Image src="/assets/logo.png" alt="logo" />
            <Text color="white" py={6}>
              Welcome to the Redeemed Christian Church of God House of Grace,
              Corpus Christi! We are so overwhelmed with Joy that God has
              brought you here.
            </Text>
            <MainHeading color="white" fontSize="24px">
              CONNECT WITH US
            </MainHeading>
            <Stack
              listStyleType="none"
              direction="row"
              color="white"
              spacing={8}
              py={3}
            >
              <SocialLink icon={FaFacebook} label="facebook" />
              <SocialLink icon={FaInstagram} label="facebook" />
              <SocialLink icon={FaTwitter} label="facebook" />
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        backgroundColor="#56706C"
        textAlign="center"
        color="white"
        fontSize="12px"
        py={4}
      >
        <SubHeading paddingTop={4}>
          © 2020 RCCG House of Grace, Texas | ️ Made with love by Esther Agbaje
        </SubHeading>
      </Box>
    </form>
  );
}

export default Footer;

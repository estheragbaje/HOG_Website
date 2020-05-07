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
      <Box
        backgroundColor="#61817C"
        width="100%"
        // // px={10}
        // // paddingTop="20px"
        // paddingX={['0 40px', '0 40px', '0 80px']}
        // paddingY="80px"
        // py="80px"
        // margin="0 80px"
      >
        <Box margin={['0 40px', '0 40px', '0 80px']} paddingY="80px">
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
          <SimpleGrid
            columns={{ base: 1, md: '2', lg: 2 }}
            spacing={[16, 16, 32]}
          >
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
            <Box textAlign={['center', 'left', 'left']}>
              <Image
                src="/assets/logo.png"
                alt="logo"
                margin={['auto', 'auto', '0']}
              />
              <Text color="white" py={[3, 3, 4]}>
                Welcome to the Redeemed Christian Church of God House of Grace,
                Corpus Christi! We are so overwhelmed with Joy that God has
                brought you here.
              </Text>
              <MainHeading
                color="white"
                fontSize="24px"
                display={['none', 'none', 'block']}
              >
                CONNECT WITH US
              </MainHeading>
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
          </SimpleGrid>
        </Box>
      </Box>
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
    </form>
  );
}

export default Footer;

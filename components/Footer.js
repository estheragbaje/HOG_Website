import React from 'react';
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
} from '@chakra-ui/core';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import SubHeading from './SubHeading';
import MainHeading from './MainHeading';
import { SocialLink } from './Links';

function Footer() {
  return (
    <Box>
      <Box backgroundColor="#61817C" width="100%" px={10} paddingTop={16}>
        <SubHeading color="white" marginBottom="16px">
          We would love to hear from you
        </SubHeading>
        <MainHeading color="white" fontSize="36px" marginBottom="28px">
          CONTACT US
        </MainHeading>
        <Stack direction="row" spacing={32}>
          <Box minWidth="45%">
            <Stack spacing={4}>
              <Input
                placeholder="Name"
                size="lg"
                focusBorderColor="#3AC7B1"
                paddingY={8}
              />
              <Input
                placeholder="Email"
                size="lg"
                focusBorderColor="#3AC7B1"
                paddingY={8}
              />
              <Textarea
                placeholder="Message"
                size="lg"
                focusBorderColor="#3AC7B1"
                paddingY={12}
              />
            </Stack>
            <Button size="lg" variantColor="teal" marginY="20px" my={10}>
              SEND
            </Button>
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
              py={6}
            >
              <SocialLink icon={FaFacebook} label="facebook" />
              <SocialLink icon={FaInstagram} label="facebook" />
              <SocialLink icon={FaTwitter} label="facebook" />
            </Stack>
          </Box>
        </Stack>
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
    </Box>
  );
}

export default Footer;

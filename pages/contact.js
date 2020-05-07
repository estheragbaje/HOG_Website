import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  SimpleGrid,
  Stack,
  Icon,
} from '@chakra-ui/core';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import { Footer, FormStack, FooterText } from '../components/Footer';
import { IconText } from '../components/Common';

function Contact() {
  return (
    <Box maxWidth="100%">
      <Box
        backgroundImage="url(/assets/we_believe.jpeg) "
        backgroundSize="cover"
        paddingBottom={['60px', '110px', '120px']}
        backgroundColor="gray.700"
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <Navigation />
        <Box
          textAlign="center"
          marginTop={['50px', '80px', '110px']}
          color="white"
        >
          <SubHeading
            color="#3AC7B1"
            fontSize={['18px', '18px', '26px', '26px']}
          >
            RCCG House of Grace
          </SubHeading>
          <MainHeading fontSize={['36px', '36px', '48px', '60px']}>
            CONTACT US
          </MainHeading>
        </Box>
      </Box>

      <Box paddingTop="80px" bg="#F7F8F7">
        <Box textAlign="center">
          <SubHeading color="#3AC7B1">Get in touch with us</SubHeading>
          <MainHeading fontSize={['24px', '24px', '36px']}>
            WE’D LOVE TO HEAR FROM YOU
          </MainHeading>
          <Box py="80px">
            <SimpleGrid
              columns={{ base: 1, md: '2', lg: 2 }}
              spacing={[16, 16, 32]}
              margin={['0 40px', '0 40px', '0 80px']}
            >
              <FormStack textAlign="left" borderColor="#3AC7B1" />
              <Stack>
                <IconText name="phone" content="3617569889" />
                <IconText name="email" content="rccghogcorpuschristi@gmail.com" />
                <IconText name="phone" content="3617569889" />
              </Stack>
            </SimpleGrid>
          </Box>
        </Box>
        <Box backgroundColor="#61817C" width="100%">
          <FooterText
            margin={['0 40px', '0 40px', '0 80px']}
            paddingY={['40px', '40px', '80px']}
            maxWidth="450px"
          />
          {/* <Box size={['24px', '24px', '200px']} BoxShrink="0"></Box> */}
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
    </Box>
  );
}

export default Contact;

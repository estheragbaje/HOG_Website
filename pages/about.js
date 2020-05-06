import React from 'react';
import { Box, Text } from '@chakra-ui/core';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import Footer from '../components/Footer';
import AboutUsList from '../components/AboutUsList';

function About() {
  return (
    <Box maxWidth="100%" bg="#F7F8F7">
      <Box
        backgroundImage="url(/assets/about_us_bg.jpg) "
        backgroundSize="cover"
        paddingBottom={['60px', '110px', '120px']}
        // backgroundColor="rgba(0,0,0,0.5)"
        // z-index="2"
        // box-shadow="inset 0 0 0 100vw rgba(0,0,0,0.5)"
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
            ABOUT US
          </MainHeading>
        </Box>
      </Box>

      <Box py="80px" margin={['0 40px', '0 40px', '0 80px']} textAlign="center">
        <SubHeading color="#3AC7B1" marginBottom="16px">
          Get to know us better
        </SubHeading>
        <MainHeading fontSize={['24px', '24px', '36px']} marginBottom="28px">
          WHO WE ARE
        </MainHeading>
      </Box>
      <AboutUsList />
      <Footer />
    </Box>
  );
}

export default About;

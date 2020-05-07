import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/core';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import AboutUsList from '../components/AboutUsList';
import { CustomButton } from '../components/Common';
import AccordionList from '../components/AccordionList';
import Footer from '../components/Footer';

function WhatWeBelieve() {
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
            WHAT WE BELIEVE
          </MainHeading>
        </Box>
      </Box>

      <Flex
        direction={['column', 'column', 'row']}
        justifyContent="space-between"
        margin={['0 40px', '0 40px', '0 80px']}
        paddingY="80px"
      >
        <Box>
          <SubHeading color="#3AC7B1" marginBottom="16px">
            More About us
          </SubHeading>
          <MainHeading fontSize={['24px', '24px', '36px']} marginBottom="28px">
            WHAT WE BELIEVE
          </MainHeading>

          <Text py={4}>
            We at RCCG House of Grace, get all of our beliefs directly from God,
            and strongly believe that only God can be held as the standard of
            what is moral and right.
          </Text>
          <Text py={4}>
            We believe Word & Spirit were the basis for the church’s formation
            on the day of Pentecost and, therefore, should be our foundation as
            well.
          </Text>
          <Text py={4}>
            We also believe that God stills speaks to us today. We can see this
            in many ways, it might be through prophecy or revelation but we
            always listen to what God might be saying to us. If we feel God has
            spoken we will weigh it against scripture to see if it's inline with
            God's word before we will let it guide us.
          </Text>
        </Box>
        <Box size={['24px', '24px', '50px']} flexShrink="0"></Box>
        <Image
          src="/assets/about_us.png"
          alt="what we believe"
          width="550px"
          objectFit="contain"
          flexShrink="0"
          borderRadius="10px"
        />
      </Flex>
      <Box backgroundColor="#F7F8F7">
        <AccordionList />
      </Box>
      <Footer />
    </Box>
  );
}

export default WhatWeBelieve;

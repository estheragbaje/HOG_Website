import React from 'react';
import { Box, Text, Image, Flex, SimpleGrid } from '@chakra-ui/core';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import Footer from '../components/Footer';
import AboutUsList from '../components/AboutUsList';
import { FlexCard, CustomButton, TextImage } from '../components/Common';

function About({ content }) {
  return (
    <Box maxWidth="100%">
      <Box
        backgroundImage="url(/assets/about_us_bg.jpg) "
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
            ABOUT US
          </MainHeading>
        </Box>
      </Box>

      <Box
        py="80px"
        // margin={['0 40px', '0 40px', '0 80px']}
        textAlign="center"
        bg="#F7F8F7"
      >
        <SubHeading color="#3AC7B1" marginBottom="16px">
          Get to know us better
        </SubHeading>
        <MainHeading fontSize={['24px', '24px', '36px']} marginBottom="28px">
          WHO WE ARE
        </MainHeading>
        <AboutUsList />
      </Box>
      <FlexCard
        heading="OUR VISION"
        src="/assets/our_vision.jpeg"
        alt="our vision"
      >
        RCCG has a vision to{' '}
        <b>
          spread the Word of God to the ends of the earth with the aims of
          leading individuals to Christ
        </b>
        , and encouraging these individuals to take as many as possible with
        them to heaven.
      </FlexCard>
      <FlexCard
        heading="OUR MISSION"
        src="/assets/our_vision.jpeg"
        alt="our vision"
        direction={['column', 'column', 'row-reverse']}
        paddingTop={0}
        paddingBottom={80}
      >
        Spreading the Word of God to the ends of the earth with the aims of
        leading individuals to Christ, and{' '}
        <b>
          encouraging these individuals to take as many people as possible with
          them to heaven
        </b>
        . Making people to get the best from their God.
      </FlexCard>

      <Box
        backgroundImage="url(/assets/what_we_believe.jpeg) "
        backgroundSize="cover"
        backgroundColor="gray.600"
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <Box
          py="80px"
          margin={['0 40px', '0 40px', '0 80px']}
          color="white"
          maxWidth="400px"
        >
          <SubHeading color="#3AC7B1" marginBottom="16px">
            More About us
          </SubHeading>
          <MainHeading fontSize={['24px', '24px', '36px']} marginBottom="28px">
            WHAT WE BELIEVE
          </MainHeading>
          <Box>
            <Text py={4}>
              We at RCCG House of Grace get all of our beliefs directly from
              God, and strongly believe that only God can be held as the
              standard of what is moral and right.
            </Text>
            <Text py={4}>
              We believe Word & Spirit were the basis for the church’s formation
              on the day of Pentecost and, therefore, should be our foundation
              as well.{' '}
            </Text>
            <CustomButton
              type="submit"
              height={['44px', '44px', '55px']}
              px={['20px', '20px', '30px']}
              bg="#3AC7B1"
              _hover={{ bg: '#1FBDA5' }}
              _focus="teal.800"
              fontSize={['16px', '16px', '21px']}
              fontWeight="400"
              color="white"
              content="LEARN MORE"
              my={10}
            />
          </Box>
        </Box>
      </Box>
      <Box py={80} margin="0 auto" textAlign="center">
        <SubHeading color="#3AC7B1" marginBottom="16px">
          Get to know us better
        </SubHeading>
        <MainHeading fontSize={['24px', '24px', '36px']} marginBottom="28px">
          OUR DEPARTMENTS
        </MainHeading>
        <SimpleGrid columns={[1, 1, 3, 3]} spacing={10} mx={8}>
          <TextImage src="/assets/about_us.png" alt="image" content="CHOIR" />
          <TextImage
            src="/assets/about_us.png"
            alt="image"
            content="USHERING"
          />
          <TextImage
            src="/assets/about_us.png"
            alt="image"
            content="EVANGELISM"
          />
        </SimpleGrid>
        <Box textAlign="center">
          <CustomButton
            height={['44px', '44px', '55px']}
            px={['20px', '20px', '30px']}
            variant="outline"
            _hover={{ bg: '#D0FFF8' }}
            borderColor="#3AC7B1"
            color="#3AC7B1"
            _focus="teal.800"
            fontSize={['16px', '16px', '21px']}
            fontWeight="400"
            marginTop={20}
            content="VIEW MORE DEPARTMENTS"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default About;

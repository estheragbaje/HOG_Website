import React from 'react';
import { Box, Text, Image, Flex, SimpleGrid } from '@chakra-ui/core';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import { Footer } from '../components/Footer';
import AboutUsList from '../components/AboutUsList';
import { FlexCard, CustomButton, TextImage } from '../components/Common';

function Give({ content }) {
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
            GIVE
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
          Ways to Give
        </SubHeading>
        <MainHeading fontSize={['24px', '24px', '36px']} marginBottom="28px">
          OFFERINGS, TITHES & DONATIONS
        </MainHeading>
        <Box margin="auto" textAlign="left">
          <FlexCard
            heading="1. SUNDAY SERVICE"
            src="/assets/our_vision.jpeg"
            alt="our vision"
          >
            Simply{' '}
            <b>
              place cash or checks payable to RCCG House of Grace in the
              offering basket{' '}
            </b>
            during the Sunday service.
            <br />
            <br />
            “Each one must give as he has decided in his heart, not reluctantly
            or under compulsion, for God loves a cheerful giver.” 2 Cor. 9: 7
          </FlexCard>
          <FlexCard
            heading="2. BILL PAY OR CHECK"
            src="/assets/our_vision.jpeg"
            alt="our vision"
            direction={['column', 'column', 'row-reverse']}
            paddingTop={0}
            paddingBottom={80}
          >
            If you want to give regularly and your bank has online bill pay,{' '}
            <b>
              you can set up an online bill pay made out to RCCG House of Grace
            </b>{' '}
            and have it mailed to the church office:
            <br />
            <br />
            <b>2306 Airline Road, Unit 110A, Corpus Christi, TX 78414</b>
            <br />
            <br />
            The Church account details are as follows:{' '}
          </FlexCard>
          <FlexCard
            heading="3. GIVE ONLINE"
            src="/assets/our_vision.jpeg"
            alt="our vision"
          >
            You can make a recurring or one time giving.{' '}
            <b>
              Your transaction will be processed through Tithe.ly OR Pushpay, a
              secure online giving platform.{' '}
            </b>
            during the Sunday service.
            <br />
            <br />
            There is zero obligation to give, but rather an open avenue of
            worship to connect fully with the heart of God.
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
              content="GIVE"
              my={10}
            />
          </FlexCard>
        </Box>
      </Box>

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
              href="/whatwebelieve"
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
            href="/departments"
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

export default Give;

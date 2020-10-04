import React from 'react';
import { Box, Text, Image, Flex, SimpleGrid, Button } from '@chakra-ui/core';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import { Footer } from '../components/Footer';
import AboutUsList from '../components/AboutUsList';
import { FlexCard, CustomButton, TextImage } from '../components/Common';
import DepartmentList from '../components/DepartmentList';

function Give({ departments }) {
  return (
    <Box maxWidth='100%'>
      <Box
        backgroundImage='url(/assets/about_us_bg.jpg) '
        backgroundSize='cover'
        paddingY={['60px', '110px', '120px']}
        backgroundColor='gray.700'
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <Box
          textAlign='center'
          color='white'
          paddingX={['40px', '40px', '80px']}
        >
          <SubHeading
            color='#3AC7B1'
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
        paddingTop='80px'
        textAlign='center'
        bg='#F7F8F7'
        paddingX={['40px', '40px', '80px']}
      >
        <MainHeading
          fontSize={['24px', '24px', '36px']}
          marginBottom='28px'
          textTransform='uppercase'
        >
          Give Tithes & Offerings
        </MainHeading>
        <Box margin='auto' textAlign='center'>
          <Flex
            direction={['column', 'column', 'column', 'row']}
            // marginX={['40px', '40px', '80px']}
            justifyContent='space-between'
            paddingY='80px'
          >
            <Box maxW='900px' fontSize='18px' textAlign='left'>
              <MainHeading
                fontSize={['16px', '18px', '24px']}
                marginBottom='28px'
                textTransform='uppercase'
              >
                1. Online Giving
              </MainHeading>
              <Text>
                You can make a recurring or one time giving.{' '}
                <b>Your transaction will be processed through Tithe.ly</b>.
                <br />
                <br />
                There is zero obligation to give, but rather an open avenue of
                worship to connect fully with the heart of God.
              </Text>
              <Link href='https://tithe.ly/give?c=2129309'>
                <a target='_blank'>
                  <Button
                    height={['44px', '44px', '55px']}
                    px={['20px', '20px', '30px']}
                    variant='outline'
                    _hover={{ bg: '#D0FFF8' }}
                    borderColor='#3AC7B1'
                    color='#3AC7B1'
                    _focus='teal.800'
                    fontSize={['16px', '16px', '21px']}
                    fontWeight='400'
                    marginTop={20}
                    children='GIVE ONLINE'
                  />
                </a>
              </Link>
            </Box>
            <Image
              paddingLeft={['0px', '0px', '0px', '20px']}
              src='/assets/our_vision.jpeg'
              alt='About us'
              maxWidth='550px'
              objectFit='cover'
              flexShrink='0'
              objectFit='cover'
              minWidth='400px'
              display={['none', 'block', 'block']}
            />
          </Flex>
        </Box>
      </Box>
      <Box textAlign='center' bg='#F7F8F7' paddingX={['40px', '40px', '80px']}>
        <Box margin='auto' textAlign='center'>
          <Flex
            direction={['column', 'column', 'column', 'row']}
            // marginX={['40px', '40px', '80px']}
            justifyContent='space-between'
            paddingY='80px'
          >
            <Box maxW='900px' fontSize='18px' textAlign='left'>
              <MainHeading
                fontSize={['16px', '18px', '24px']}
                marginBottom='28px'
                textTransform='uppercase'
              >
                2. Via Sms
              </MainHeading>
              <Text>
                You can make a one time giving via SMS.{' '}
                <b>SMS the amount HOGCC to 45888 </b>.
                <br />
                <br />
                For example to give $50, text $50 HOGCC to 45888
              </Text>
            </Box>
            <Image
              paddingLeft={['0px', '0px', '0px', '20px']}
              src='/assets/sms.jpeg'
              alt='About us'
              maxWidth='550px'
              objectFit='cover'
              flexShrink='0'
              objectFit='cover'
              minWidth='400px'
              display={['none', 'block', 'block']}
            />
          </Flex>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://hog-website.herokuapp.com/departments/?_limit=3'
  );

  const departments = await res.json();

  return {
    props: {
      departments,
    },
  };
}

export default Give;

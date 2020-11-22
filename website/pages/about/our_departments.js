import React from 'react';
import Link from 'next/link';
import { Box, Flex, Image, Text, SimpleGrid, Button } from '@chakra-ui/core';
import Navigation from '../../components/Navigation';
import SubHeading from '../../components/SubHeading';
import MainHeading from '../../components/MainHeading';
import { Footer } from '../../components/Footer';
import { TextImage } from '../../components/Common';
import DepartmentList from '../../components/DepartmentList';

function Departments({ departments }) {
  return (
    <Box>
      <Box
        backgroundImage='url(/assets/our_departments.jpeg) '
        backgroundSize='cover'
        paddingY={['60px', '110px', '120px']}
        backgroundColor='gray.700'
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <Box
          textAlign='center'
          // marginTop={['50px', '80px', '110px']}
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
            OUR DEPARTMENTS
          </MainHeading>
        </Box>
      </Box>

      <Box pt='80px'>
        <Box maxW='1600px' margin='auto'>
          <Box
            textAlign='center'
            margin='auto'
            paddingX={['40px', '40px', '80px']}
          >
            <SubHeading color='#3AC7B1'>Get to know us better</SubHeading>
            <MainHeading fontSize={['24px', '24px', '36px']}>
              OUR DEPARTMENTS
            </MainHeading>
            <Text py={4}>
              You are welcome to join any of the following departments as a
              worker in RCCG House of Grace Parish. Simply ask any of our ushers
              to guide you on what to do.
            </Text>
          </Box>
        </Box>
        <Box paddingX={['40px', '40px', '80px']}>
          <DepartmentList departments={departments} />
        </Box>
        <Box textAlign='center'>
          <Link href='/messages '>
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
              marginY={20}
              children='WATCH SERMONS'
            />
          </Link>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://hog-website.herokuapp.com/departments/');
  const departments = await res.json();

  return {
    props: {
      departments,
    },
    revalidate: 1,
  };
}

export default Departments;

import React from 'react';
import { Box, Flex, Image, Text, SimpleGrid } from '@chakra-ui/core';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import { Footer } from '../components/Footer';
import { TextImage } from '../components/Common';
import DepartmentList from '../components/DepartmentList';

function Departments() {
  return (
    <Box maxWidth="100%">
      <Box
        backgroundImage="url(/assets/our_departments.jpeg) "
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
            OUR DEPARTMENTS
          </MainHeading>
        </Box>
      </Box>

      <Box paddingY="80px">
        <Box
          textAlign="center"
          maxWidth="640px"
          mx="auto"
          px={['16px', '16px', '0']}
        >
          <SubHeading color="#3AC7B1">Get to know us better</SubHeading>
          <MainHeading fontSize={['24px', '24px', '36px']}>
            OUR DEPARTMENTS
          </MainHeading>
          <Text py={4}>
            You are welcome to join any of the following departments as a worker
            in RCCG House of Grace Parish. Simply ask any of our ushers to guide
            you on what to do.
          </Text>
        </Box>
        <DepartmentList />
      </Box>
      <Footer />
    </Box>
  );
}

export default Departments;

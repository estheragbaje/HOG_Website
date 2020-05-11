import React from 'react';
import { Box, Text, Image, Flex, SimpleGrid, Input } from '@chakra-ui/core';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import { Footer } from '../components/Footer';
import AboutUsList from '../components/AboutUsList';
import { FlexCard, CustomButton, TextImage } from '../components/Common';
import MessageList from '../components/MessageList';

function Sermons({ content }) {
  return (
    <Box maxWidth="100%">
      <Box
        backgroundImage="url(/assets/sermons.jpg) "
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
            SERMONS
          </MainHeading>
        </Box>
      </Box>

      <Box
        py="80px"
        margin="auto"
        maxWidth="1100px"
        marginX={['30px', '30px', '80px']}
        textAlign="left"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          direction={['column', 'column', 'row']}
        >
          <Box>
            <SubHeading color="#3AC7B1" marginBottom="16px">
              Sermon Archive
            </SubHeading>
            <MainHeading
              fontSize={['24px', '24px', '36px']}
              marginBottom="28px"
            >
              VIEW MESSAGES
            </MainHeading>
          </Box>
          <Box minWidth="400px">
            <Input placeholder="Find Sermons" focusBorderColor="#3AC7B1" />
          </Box>
        </Flex>
        <MessageList />
      </Box>

      <Box
        backgroundImage="url(/assets/weekly_services.jpg) "
        backgroundSize="cover"
        backgroundColor="gray.600"
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <Box
          py="80px"
          margin={['0 40px', '0 40px', '0 80px']}
          color="white"
          maxWidth="500px"
        >
          <SubHeading color="#3AC7B1" marginBottom="16px">
            Get to know about our weekly activites
          </SubHeading>
          <MainHeading fontSize={['24px', '24px', '36px']} marginBottom="28px">
            OUR WEEKLY SERVICES{' '}
          </MainHeading>
          <Box>
            <Text py={4}>
              While going to a church meeting on a Sunday is helpful, we can
              grow much deeper in the Christian life through regular fellowship
              with other brethren.
            </Text>
            <Text py={4}>
              While going to a church meeting on a Sunday is helpful, we can
              grow much deeper in the Christian life through regular fellowship
              with other brethren.
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
              content="VIEW SERVICES"
              my={10}
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Sermons;

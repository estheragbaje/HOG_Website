import React from 'react';
import { Box, Flex, Image, Text, SimpleGrid, Stack } from '@chakra-ui/core';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import { Footer } from '../components/Footer';
import { EventCard } from '../components/Common';

function Events() {
  return (
    <Box maxWidth="100%">
      <Box
        backgroundImage="url(/assets/all_events.jpeg) "
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
            ALL EVENTS
          </MainHeading>
        </Box>
      </Box>

      <Box paddingY="80px">
        <Box textAlign="center" mx="auto">
          <SubHeading color="#3AC7B1">Upcoming Events</SubHeading>
          <MainHeading fontSize={['24px', '24px', '36px']}>JOIN US</MainHeading>
        </Box>
        <SimpleGrid
          columns={['1', '1', '2']}
          margin="auto"
          spacing={16}
          margin={['0 40px', '0 40px', '0 80px']}
          paddingTop="40px"
        >
          <EventCard
            src="/assets/good_friday.png"
            alt="good friday"
            title="GOOD FRIDAY"
            date="17.04.20"
            time="10:00am  - 11:30 am"
          />
          <EventCard
            src="/assets/palm.png"
            alt="palm sunday"
            title="PALM SUNDAY"
            date="17.04.20"
            time="10:00am  - 11:30 am"
          />
          <EventCard
            src="/assets/palm2.png"
            alt="good friday"
            title="GOOD FRIDAY"
            date="17.04.20"
            time="10:00am  - 11:30 am"
          />
          <EventCard
            src="/assets/praise.png"
            alt="good friday"
            title="GOOD FRIDAY"
            date="17.04.20"
            time="10:00am  - 11:30 am"
          />
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
}

// px={['16px', '16px', '0']}

export default Events;

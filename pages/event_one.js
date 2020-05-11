import React from 'react';
import { Box, Flex, Image, Text, SimpleGrid, Stack } from '@chakra-ui/core';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import MainHeading from '../components/MainHeading';
import { Footer } from '../components/Footer';
import { EventCard, IconText, EventIcon } from '../components/Common';

function EventDetails({ bgImage, info, date, time, venue, name, ...rest }) {
  return (
    <Box maxWidth="100%">
      <Box
        // backgroundImage="url(/assets/all_events.jpeg) "
        backgroundImage={`url(${bgImage}) `}
        backgroundSize="cover"
        paddingBottom={['60px', '110px', '120px']}
        backgroundColor="gray.800"
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <Navigation />
        <Box
          textAlign="center"
          marginTop={['50px', '80px', '110px']}
          color="white"
        >
          {/* <SubHeading
            color="#3AC7B1"
            fontSize={['18px', '18px', '26px', '26px']}
          >
            RCCG House of Grace
          </SubHeading> */}
          <MainHeading fontSize={['36px', '36px', '48px', '60px']}>
            {name}
          </MainHeading>
        </Box>
      </Box>

      <Box paddingY="80px" px={12}>
        <Box>
          <Text>{info}</Text>
        </Box>
        <Box textAlign={['left', 'left', 'center']}>
          <MainHeading fontSize="20px" py={8}>
            EVENT DETAILS
          </MainHeading>
          <SimpleGrid columns={['1', '1', '3']} maxWidth="700px" margin="auto">
            <EventIcon name="calendar" content={date} />
            <EventIcon name="calendar" content={time} />
            <EventIcon name="calendar" content={venue} />
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

// px={['16px', '16px', '0']}

export default EventDetails;

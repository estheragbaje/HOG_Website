import React from 'react';
import Link from 'next/link';
import { Box, Flex, Image, Text, SimpleGrid, Button } from '@chakra-ui/core';
import Navigation from '../../components/Navigation';
import SubHeading from '../../components/SubHeading';
import MainHeading from '../../components/MainHeading';
import { Footer } from '../../components/Footer';
import { EventCard } from '../../components/Common';

function Events({ events }) {
  return (
    <Box maxWidth='100%'>
      <Box
        backgroundImage='url(/assets/all_events.jpeg) '
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
            ALL EVENTS
          </MainHeading>
        </Box>
      </Box>

      <Box pt='80px'>
        <Box textAlign='center' mx='auto'>
          <SubHeading color='#3AC7B1'>Upcoming Events</SubHeading>
          <MainHeading fontSize={['24px', '24px', '36px']}>JOIN US</MainHeading>
        </Box>
        <SimpleGrid
          columns={['1', '1', '2']}
          margin='auto'
          spacing={16}
          margin={['0 40px', '0 40px', '0 80px']}
          paddingTop='40px'
        >
          {events.map((event) => (
            <Link href={`/events/${event.id}`}>
              <EventCard
                key={event.id}
                src={event.Image.url}
                alt={event.Title}
                title={event.Title}
                date={event.Date}
                time={event.Time}
              />
            </Link>
          ))}
        </SimpleGrid>
        <Box textAlign={['left', 'left', 'center']}>
          <Link href='/sermons '>
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
              children='LISTEN TO SERMONS'
            />
          </Link>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

// px={['16px', '16px', '0']}

export async function getStaticProps() {
  const res = await fetch('https://hog-website.herokuapp.com/events/');
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}

export default Events;

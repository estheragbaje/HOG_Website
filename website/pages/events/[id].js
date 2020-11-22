import { Box, Button, Flex, Text } from '@chakra-ui/core';
import Link from 'next/link';
import React from 'react';
import { EventIcon } from '../../components/Common';
import { Footer } from '../../components/Footer';
import MainHeading from '../../components/MainHeading';

function EventDetails({ event, ...rest }) {
  return (
    <Box maxWidth='100%'>
      <Box
        backgroundImage={`url(${event.Image.url})`}
        backgroundSize='cover'
        paddingY={['60px', '110px', '120px']}
        backgroundColor='gray.800'
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <Box textAlign='center' color='white'>
          <MainHeading
            fontSize={['36px', '36px', '48px', '60px']}
            textTransform='uppercase'
          >
            {event.Title}
          </MainHeading>
        </Box>
      </Box>

      <Box pt='80px' px={12} maxW='1600px' margin='auto'>
        <Box>{/* <Text>{info}</Text> */}</Box>
        <Box textAlign={['left', 'left', 'center']}>
          <Text>{event.Description}</Text>
          <MainHeading fontSize='20px' paddingY={8}>
            EVENT DETAILS
          </MainHeading>

          <Flex
            direction={['column', 'column', 'row']}
            maxWidth='700px'
            margin='auto'
            justifyContent='space-between'
            alignItems='center'
          >
            <EventIcon textAlign='left' name='calendar' content={event.Date} />
            <EventIcon name='time' content={event.Time} />
            <EventIcon name='time' content={event.Location} />
          </Flex>
          <Link href='/events'>
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
              children='VIEW ALL EVENTS'
            />
          </Link>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export async function getServerSideProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://hog-website.herokuapp.com/events/${params.id}`
  );
  const event = await res.json();

  // Pass post data to the page via props
  return { props: { event } };
}

export default EventDetails;

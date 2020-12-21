import {
  AspectRatioBox,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/core';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Footer } from '../components/Footer';
import MainHeading from '../components/MainHeading';
import MiniNewsCard from '../components/MiniNewsCard';
import SideSermonList from '../components/SideSermonList';
import SubHeading from '../components/SubHeading';
import WeeklyServicesList from '../components/WeeklyServicesList';
import useInterval from '@use-it/interval';

/**
 * Put the slider images here
 */
const images = [
  '/assets/new_bg.jpg',
  '/assets/church_photo.jpeg',
  '/assets/church_photo2.jpeg',
];

export const toDate = (date) => {
  // ensure the date matches "DD-MM-YYYY"
  const [dd, mm, yyyy] = date.split('-');
  return new Date(`${mm}/${dd}/${yyyy}`);
};

function HomePage({ services, events, event, sermons }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const [shouldTransition, setShouldTransition] = useState(true);

  const intervalDuration = 5000;

  useInterval(() => {
    setActiveSlide((current) => {
      if (!shouldTransition) {
        setShouldTransition(true);
      }

      let next = current + 1;

      // loop back to image 1 once it reaches the end
      if (next > images.length) {
        setShouldTransition(false);
        next = 1;
      }
      return next;
    });
  }, intervalDuration);

  const x = -(100 / images.length) * (activeSlide - 1);

  const sortedSermons = sermons.sort((a, b) => toDate(b.Date) - toDate(a.Date));
  const recentSermon = sortedSermons[0];

  return (
    <Box maxWidth='100%'>
      <Box
        width='100%'
        overflowX='hidden'
        position='relative'
        paddingY={['60px', '110px', '145px']}
      >
        <Flex
          transform={`translateX(${x}%)`}
          transition={shouldTransition ? 'transform 200ms' : undefined}
          top='0'
          position='absolute'
          w={`calc(100% * ${images.length})`}
          h='100%'
        >
          {images.map((image, index) => (
            <Box
              key={index}
              width='100%'
              height='100%'
              backgroundImage={`url(${image})`}
              backgroundSize='cover'
              style={{ backgroundBlendMode: 'overlay' }}
              backgroundColor='gray.600'
            />
          ))}
        </Flex>
        <Box
          position='relative'
          textAlign='center'
          color='white'
          paddingX={['40px', '40px', '80px']}
        >
          <SubHeading
            color='#3AC7B1'
            fontSize={['18px', '18px', '26px', '26px']}
          >
            Welcome to Redeemed Christian Church of God
          </SubHeading>
          <MainHeading
            fontSize={['28px', '36px', '48px', '64px']}
            marginBottom='24px'
          >
            THE PLACE TO BE
          </MainHeading>
          <Text fontSize={['18px', '18px', '26px', '26px']} marginBottom='60px'>
            Worship with us Sundays at 9:30am
          </Text>

          <Link href='/messages'>
            <Button
              height={['55px', '55px', '66px']}
              px={['20px', '20px', '30px']}
              bg='#3AC7B1'
              _hover={{ bg: '#1FBDA5' }}
              _focus='teal.800'
              fontSize={['16px', '16px', '21px']}
              fontWeight='400'
              textTransform='uppercase'
            >
              Watch Sermons
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        py='80px'
        margin='auto'
        paddingX={['40px', '40px', '80px']}
        maxW='1600px'
      >
        <MainHeading fontSize={['24px', '24px', '36px']} marginBottom='28px'>
          OUR LATEST SERMONS
        </MainHeading>

        <SimpleGrid columns={[1, 1, 2]} spacing={8}>
          <AspectRatioBox ratio={16 / 9} flex='1'>
            <Box
              as='iframe'
              title={recentSermon.Topic}
              src={recentSermon.Video_url}
              allowFullScreen
            />
          </AspectRatioBox>
          <SideSermonList sermons={sortedSermons} />
        </SimpleGrid>

        <Box textAlign='center'>
          <Link href='/messages'>
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
              children='VIEW MORE SERMONS'
            />
          </Link>
        </Box>
      </Box>
      <Box paddingY='80px' backgroundColor='#F7F8F7'>
        <Box maxW='1600px' margin='auto'>
          <Box textAlign='center' paddingX={['40px', '40px', '80px']}>
            <MainHeading fontSize={['24px', '24px', '36px']}>
              JOIN OUR WEEKLY SERVICES
            </MainHeading>
          </Box>
          <Box textAlign='center' paddingX={['40px', '40px', '80px']}>
            <WeeklyServicesList services={services} />

            <Link href='/services '>
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
                marginBottom={4}
                children='SEE ALL SERVICES'
              />
            </Link>
          </Box>
        </Box>
      </Box>

      <Box backgroundColor='#61817C'>
        <Flex
          direction={{ base: 'column', md: 'row', lg: 'row' }}
          maxW='1600px'
          margin='auto'
        >
          <Image
            src='/assets/pastor_image.png'
            alt='Pastor Segun Olowookere'
            objectFit='cover'
            minWidth='50%'
            // minWidth='400px'
            minHeight={['200px', '200px', '750px']}
            display={['none', 'none', 'inline-block']}
          />
          <Box
            backgroundColor='#61817C'
            // maxWidth='100%'
            paddingY={16}
            color='white'
            minWidth='50%'
          >
            <Box paddingX={['40px', '40px', '80px']} maxW='1600px'>
              <SubHeading color='#3AC7B1' fontSize='21px'>
                Welcome Address
              </SubHeading>
              <MainHeading fontSize='24px' color='white' paddingBottom={4}>
                WELCOME TO THE REDEEMED CHRISTIAN CHURCH OF GOD HOUSE OF GRACE,
                CORPUS CHRISTI!
              </MainHeading>
              <Text py={4}>
                We are so overwhelmed with Joy that God has brought you here. In
                this church we believe that we will experience God’s Divine’s
                Grace abundantly, and that prayer is the gateway to God.{' '}
                <b>
                  Our congregation is filled with people eager to experience and
                  seek God in a way they have never done before.
                </b>{' '}
                Jesus touches us daily and our lives are being transformed.
              </Text>
              <Text py={4}>
                We start off our day by committing our ways to the lord as a
                church, and we continue to encourage ourselves throughout the
                week with our{' '}
                <b>
                  Tuesday Bible Study, Wednesday Hour with Jesus, and monthly
                  Friday Holy Ghost nights.
                </b>{' '}
                We promise that your life will never remain the same, and that
                our church will help catapult your walk with Christ.
              </Text>
              <Text py={4}>
                <b>
                  Our prayer for you is that God’s unmerited favor will reign in
                  your life and that of your family.
                </b>{' '}
                God Bless you, and Welcome to our Church.
              </Text>
              <MainHeading fontSize='24px' color='white' paddingTop={8}>
                OLUSEGUN, OLOWOOKERE
              </MainHeading>
              <SubHeading color='white' paddingTop={2}>
                Lead Pastor
              </SubHeading>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box maxW='1600px' margin='auto'>
        <Box>
          <Box py='80px' paddingX={['40px', '40px', '80px']}>
            <MainHeading
              fontSize={['24px', '24px', '36px']}
              marginBottom='28px'
            >
              THE LATEST NEWS
            </MainHeading>
            <MiniNewsCard paddingTop='20px' events={events} event={event} />
          </Box>
        </Box>
      </Box>
      <Box bg='#61817C'>
        <Flex
          direction={{ base: 'column', md: 'row', lg: 'row' }}
          maxW='1600px'
          margin='auto'
        >
          <Box
            minWidth='50%'
            backgroundColor='#61817C'
            maxWidth='100%'
            paddingY={16}
            color='white'
          >
            <Box paddingX={['40px', '40px', '80px']}>
              <MainHeading fontSize={['24px', '24px', '36px']}>
                MORE ABOUT US
              </MainHeading>
              <Text py={4}>
                RCCG House of Grace based in Corpus Christi Texas is a Parish of
                the Redeemed Christian Church of God (RCCG).{' '}
                <b>
                  Pastor E. A. Adeboye is the General Overseer of RCCG
                  Worldwide, and Pastor Olusegun Olowookere is the pioneer and
                  senior pastor of the Parish.
                </b>
              </Text>
              <Text py={4}>
                As a Bible believing, and God-fearing church,{' '}
                <b>we teach and encourage a life of holiness.</b> House of Grace
                has an appeal to all types of people, with a determination to
                teach and impart people to excel in their various geographical
                areas, stages of secular life and levels of spiritual
                development.
              </Text>
              <Link href='/about/what_we_believe'>
                <Button
                  type='submit'
                  height={['44px', '44px', '55px']}
                  px={['20px', '20px', '30px']}
                  bg='#3AC7B1'
                  _hover={{ bg: '#1FBDA5' }}
                  _focus='teal.800'
                  fontSize={['16px', '16px', '21px']}
                  fontWeight='400'
                  color='white'
                  children='LEARN MORE'
                  my={10}
                />
              </Link>
            </Box>
          </Box>
          <Image
            src='/assets/about_us.png'
            alt='About us'
            objectFit='cover'
            minW='50%'
            // minWidth='400px'
            minHeight={['200px', '200px', '750px']}
            display={['none', 'none', 'inline-block']}
          />
        </Flex>
      </Box>
      <Box
        width='100%'
        // px={10}
        paddingTop={12}
        paddingBottom='20px'
        // minW={['0', '0', '500px']}
        py='80px'
      >
        <Box
          margin='auto'
          paddingX={['40px', '40px', '40px', '80px']}
          maxW='1600px'
        >
          {/* <SubHeading color='#3AC7B1' marginBottom='16px'>
            Where to find us
          </SubHeading> */}
          <MainHeading fontSize={['24px', '24px', '36px']} marginBottom='28px'>
            WORSHIP WITH US
          </MainHeading>
          <SimpleGrid
            columns={['1', '1', '2']}
            spacing={8}
            paddingBottom='20px'
          >
            <AspectRatioBox ratio={16 / 9}>
              <Box
                as='iframe'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.979823200833!2d-97.36485948493838!3d27.687018482800358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8668f5cdf44848ed%3A0x5015a69c9848f5cb!2s2306%20Airline%20Rd%20%23110A%2C%20Corpus%20Christi%2C%20TX%2078414%2C%20USA!5e0!3m2!1sen!2sng!4v1588706338081!5m2!1sen!2sng'
                alt='demo'
              />
            </AspectRatioBox>
            <Box wordBreak='break-word'>
              <MainHeading fontSize='21px' paddingTop='20px'>
                RCCG HOUSE OF GRACE
              </MainHeading>
              <Text fontSize={['16px', '20px']}>
                Spreading the Word of God to the ends of the earth with the aims
                of leading individuals to Christ.
              </Text>
              <Stack spacing={2} marginTop='10px'>
                <ContactItem icon={<Icon name='phone' color='#3AC7B1' />}>
                  3617569889
                </ContactItem>
                <ContactItem icon={<Box as={FaMapMarkerAlt} color='#3AC7B1' />}>
                  2306 Airline Road, Unit 110A, Corpus Christi, TX 78414
                </ContactItem>
                <ContactItem icon={<Icon name='email' color='#3AC7B1' />}>
                  rccghogcorpuschristi@gmail.com
                </ContactItem>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

function ContactItem({ icon, children, ...rest }) {
  return (
    <Flex
      alignItems='center'
      paddingTop='10px'
      fontSize={['14px', '18px', '21px']}
      {...rest}
    >
      {icon}
      <Text paddingLeft={2}>{children}</Text>
    </Flex>
  );
}

export async function getStaticProps() {
  const servicesRes = await fetch(
    'https://hog-website.herokuapp.com/weekly-services/?_limit=3'
  );
  const eventsRes = await fetch(
    'https://hog-website.herokuapp.com/events/?_limit=4&_sort=updated_at:DESC'
  );

  const sermonsRes = await fetch(
    'https://hog-website.herokuapp.com/messages/?_limit=4&_sort=updated_at:DESC'
  );

  const services = await servicesRes.json();
  const events = await eventsRes.json();
  const sermons = await sermonsRes.json();

  return {
    props: {
      services,
      events,
      sermons,
    },
    revalidate: 1,
  };
}

export default HomePage;

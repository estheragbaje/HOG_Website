import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Appearance } from '../components/Appearance';
import { Footer } from '../components/Footer';
import MainHeading from '../components/MainHeading';
import { PageLayout } from '../components/PageLayout';
import SubHeading from '../components/SubHeading';
import WeeklyServicesList from '../components/WeeklyServicesList';
import { WeeklyServiceModel } from '../services/providers/api-models';
import { GetApiProvider } from '../services/providers/api-provider';

/**
 * Put the slider images here
 */

export const toDate = (date) => {
  // ensure the date matches "DD-MM-YYYY"
  const [dd, mm, yyyy] = date.split('-');
  return new Date(`${mm}/${dd}/${yyyy}`);
};

interface BoxWithBackgroundImageProps {
  children: any;
  backgroundImageSrc: string;
  [prop: string]: any;
}
const BoxWithBackgroundImage = ({
  children,
  backgroundImageSrc,
  ...rest
}: BoxWithBackgroundImageProps) => {
  return (
    <Box
      {...rest}
      background='orange'
      backgroundImage='url(/assets/home_hero.jpg)'
      backgroundSize='cover'
      style={{ backgroundBlendMode: 'overlay' }}
      backgroundColor='gray.600'
    >
      {children}
    </Box>
  );
};

interface HomePageProps {
  services: WeeklyServiceModel[];
  [prop: string]: any;
}

function HomePage({ services }: HomePageProps) {
  const footerColor = Appearance.primaryColor;

  return (
    <PageLayout>
      <Box maxWidth='100%'>
        <Box
          // background="green"
          width='100%'
          overflowX='hidden'
          position='relative'
          // paddingY={["60px", "110px", "145px"]}
        >
          {/* <HeroCarousel
					imageUrlList={["/assets/home_hero.jpg"]}
					enableTransition={false}
				/> */}

          {/* /assets/our_vision.jpeg */}
          <BoxWithBackgroundImage
            backgroundImageSrc='/assets/home_hero.jpg'
            paddingTop='20px'
          >
            <Box
              width='100%'
              height='100%'
              textAlign='center'
              color='white'
              paddingX={['40px', '40px', '80px']}
              paddingY={['60px', '110px', '145px']}
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
              <Text
                fontSize={['18px', '18px', '26px', '26px']}
                marginBottom='60px'
              >
                Worship with us Sundays at 9:30am
              </Text>

              {/* <Link href=> */}
              <Button
                height={['55px', '55px', '66px']}
                px={['20px', '20px', '30px']}
                bg='#3AC7B1'
                _hover={{ bg: '#1FBDA5' }}
                // @ts-ignore
                _focus='teal.800'
                fontSize={['16px', '16px', '21px']}
                fontWeight='400'
                textTransform='uppercase'
                onClick={() =>
                  window.open(
                    'https://www.youtube.com/channel/UCXxVxc0iUgYaOvLWbsg0V-g/videos',
                    '_blank'
                  )
                }
              >
                Watch our Services
              </Button>
              {/* </Link> */}
            </Box>
          </BoxWithBackgroundImage>
        </Box>

        <Box paddingTop='60px' backgroundColor='#F7F8F7' paddingBottom='60px'>
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
                  // @ts-ignore
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

        <Box backgroundColor={footerColor}>
          <Flex
            direction={{ base: 'column', md: 'row', lg: 'row' }}
            maxW='1600px'
            margin='auto'
          >
            <Image
              src='/assets/pastor.jpeg'
              alt='Pastor Segun Olowookere'
              objectFit='cover'
              minWidth='50%'
              minHeight={['200px', '200px', '750px']}
              display={['none', 'none', 'inline-block']}
            />
            <Box
              backgroundColor={footerColor}
              paddingY={16}
              color='white'
              minWidth='50%'
            >
              <Box paddingX={['40px', '40px', '80px']} maxW='1600px'>
                <SubHeading color='#3AC7B1' fontSize='21px'>
                  Welcome Address
                </SubHeading>
                <MainHeading fontSize='24px' color='white' paddingBottom={4}>
                  WELCOME TO THE REDEEMED CHRISTIAN CHURCH OF GOD HOUSE OF
                  GRACE, CORPUS CHRISTI!
                </MainHeading>
                <Text py={4}>
                  We are so overwhelmed with Joy that God has brought you here.
                  In this church we believe that we will experience God’s
                  Divine’s Grace abundantly, and that prayer is the gateway to
                  God.{' '}
                  <b>
                    Our congregation is filled with people eager to experience
                    and seek God in a way they have never done before.
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
                    Our prayer for you is that God’s unmerited favor will reign
                    in your life and that of your family.
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

        <Box width='100%' paddingTop={12} paddingBottom='20px' py='80px'>
          <Box
            margin='auto'
            paddingX={['40px', '40px', '40px', '80px']}
            maxW='1600px'
          >
            <MainHeading
              fontSize={['24px', '24px', '36px']}
              marginBottom='28px'
            >
              WORSHIP WITH US
            </MainHeading>
            <SimpleGrid columns={[1, 1, 2]} spacing={8} paddingBottom='20px'>
              <Box width='100%' height='100%'>
                <Box
                  as='iframe'
                  // @ts-ignore
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.313343545478!2d-97.36228292441989!3d27.67670872684192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8668f42dd571d955%3A0x12a3e6b837fd96d3!2s6814%20Sandra%20Ln%2C%20Corpus%20Christi%2C%20TX%2078414!5e0!3m2!1sen!2sus!4v1753125118839!5m2!1sen!2sus'
                  // @ts-ignore
                  alt='demo'
                  width='100%'
                  height='100%'
                />
              </Box>
              <Box wordBreak='break-word'>
                <MainHeading fontSize='21px' paddingTop='20px'>
                  RCCG HOUSE OF GRACE
                </MainHeading>
                <Text fontSize={['16px', '20px']}>
                  Spreading the Word of God to the ends of the earth with the
                  aims of leading individuals to Christ.
                </Text>
                <Stack spacing={2} marginTop='10px'>
                  <ContactItem icon={<PhoneIcon color='#3AC7B1' />}>
                    3617569889
                  </ContactItem>
                  <ContactItem
                    icon={<Box as={FaMapMarkerAlt} color='#3AC7B1' />}
                  >
                    6814 Sandra Ln, Corpus Christi, TX 78414
                  </ContactItem>
                  <ContactItem icon={<EmailIcon color='#3AC7B1' />}>
                    rccghogcorpuschristi@gmail.com
                  </ContactItem>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>

        <Footer />
      </Box>
    </PageLayout>
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
  const provider = GetApiProvider();
  const services = await provider.getWeeklyServices({
    limit: 3,
    sort: 'updated_at:DESC',
  });

  return {
    props: {
      services,
    },
    revalidate: 1,
  };
}

export default HomePage;

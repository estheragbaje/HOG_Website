import React from 'react';
import {
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Heading,
  Button,
  Icon,
  SimpleGrid,
  AspectRatioBox,
} from '@chakra-ui/core';
import { FaMapMarkerAlt } from 'react-icons/fa';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/SubHeading';
import Navigation from '../components/Navigation';
import SideSermonList from '../components/SideSermonList';
import ServicesHomeList from '../components/ServicesHomeList';
import LatestNewsList from '../components/LatestNewsList';
import Footer from '../components/Footer';
import { CustomButton } from '../components/Common';

function HomePage({ color, children, fontSize, heading, subheading, content }) {
  return (
    <Box>
      <Box
        backgroundImage="url(/assets/new_bg.jpg)"
        backgroundSize="cover"
        paddingBottom="140px"
      >
        <Navigation />
        <Box textAlign="center" marginTop={110} color="white">
          <SubHeading
            color="#3AC7B1"
            fontSize={['18px', '18px', '26px', '30px']}
          >
            Welcome to Redeemed Christian Church of God
          </SubHeading>
          <MainHeading
            fontSize={['36px', '36px', '48px', '64px']}
            marginBottom="24px"
          >
            THE PLACE TO BE
          </MainHeading>
          <Text fontSize={['18px', '18px', '26px', '30px']} marginBottom="60px">
            Worship with us Sundays at 9:30am
          </Text>
          <CustomButton
            height={['55px', '55px', '66px']}
            width="374px"
            bg="#3AC7B1"
            _hover={{ bg: '#1FBDA5' }}
            _focus="teal.800"
            fontSize="21px"
            fontWeight="400"
            content="WATCH SERVICE
          ONLINE"
          />
        </Box>
      </Box>
      <Box py="80px" margin="0 80px">
        <SubHeading color="#3AC7B1" marginBottom="16px">
          Watch our services online
        </SubHeading>
        <MainHeading fontSize="36px" marginBottom="28px">
          OUR LATEST SERMONS
        </MainHeading>

        <SimpleGrid columns={2} spacing={5}>
          <AspectRatioBox ratio={16 / 9} flex="1">
            <Box
              as="iframe"
              title="The Lord is our Shepherd"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatioBox>
          <SideSermonList />
        </SimpleGrid>

        <Box textAlign="center">
          <CustomButton
            height="55px"
            width="264px"
            variant="outline"
            _hover={{ bg: '#D0FFF8' }}
            borderColor="#3AC7B1"
            color="#3AC7B1"
            _focus="teal.800"
            fontSize="21px"
            fontWeight="400"
            marginTop={20}
            content="VIEW MORE SERMONS"
          />
        </Box>
      </Box>
      <Box paddingTop="80px" backgroundColor="#F7F8F7">
        <Box textAlign="center">
          <SubHeading color="#3AC7B1">
            We are Passionate About Sharing the Gospel of Jesus
          </SubHeading>
          <MainHeading fontSize="36px">JOIN OUR WEEKLY SERVICES</MainHeading>
        </Box>
        <Box textAlign="center">
          <ServicesHomeList />
          <CustomButton
            height="55px"
            width="264px"
            variant="outline"
            _hover={{ bg: '#D0FFF8' }}
            borderColor="#3AC7B1"
            color="#3AC7B1"
            _focus="teal.800"
            fontSize="21px"
            fontWeight="400"
            marginTop={20}
            content="SEE ALL SERVICES"
          />
        </Box>

        <Flex paddingTop="80px">
          <Image
            src="/assets/pastor_image.png"
            alt="Pastor Segun Olowookere"
            objectFit="cover"
            size="750px"
          />
          <Box
            backgroundColor="#61817C"
            width="100%"
            px={10}
            paddingTop={12}
            paddingBottom="20px"
          >
            <SubHeading color="#3AC7B1" fontSize="21px">
              Welcome Address
            </SubHeading>
            <MainHeading fontSize="24px" color="white" paddingBottom={4}>
              WELCOME TO THE REDEEMED CHRISTIAN CHURCH OF GOD HOUSE OF GRACE,
              CORPUS CHRISTI!
            </MainHeading>

            <Text color="white" py={2}>
              We are so overwhelmed with Joy that God has brought you here. In
              this church we believe that we will experience God’s Divine’s
              Grace abundantly, and that prayer is the gateway to God.{' '}
              <b>
                Our congregation is filled with people eager to experience and
                seek God in a way they have never done before.
              </b>{' '}
              Jesus touches us daily and our lives are being transformed.
            </Text>
            <Text color="white" py={2}>
              We start off our day by committing our ways to the lord as a
              church, and we continue to encourage ourselves throughout the week
              with our{' '}
              <b>
                Tuesday Bible Study, Wednesday Hour with Jesus, and monthly
                Friday Holy Ghost nights.
              </b>{' '}
              We promise that your life will never remain the same, and that our
              church will help catapult your walk with Christ.
            </Text>
            <Text color="white" py={2}>
              <b>
                Our prayer for you is that God’s unmerited favor will reign in
                your life and that of your family.
              </b>{' '}
              God Bless you, and Welcome to our Church.
            </Text>
            <MainHeading fontSize="24px" color="white" paddingTop={8}>
              OLUSEGUN, OLOWOOKERE
            </MainHeading>
            <SubHeading color="#3AC7B1" paddingTop={2}>
              Lead Pastor
            </SubHeading>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Box py="80px" margin="0 80px">
          <SubHeading color="#3AC7B1" marginBottom="16px">
            Upcoming Events
          </SubHeading>
          <MainHeading fontSize="36px" marginBottom="28px">
            THE LATEST NEWS
          </MainHeading>
          <LatestNewsList paddingTop="20px" />
        </Box>
      </Box>
      <Flex>
        <Box
          backgroundColor="#61817C"
          width="100%"
          px={10}
          paddingTop={16}
          color="white"
        >
          <SubHeading>Get to know us better</SubHeading>
          <MainHeading fontSize="36px">MORE ABOUT US</MainHeading>
          <Text py={4}>
            RCCG House of Grace based in Corpus Christi Texas is a Parish of the
            Redeemed Christian Church of God (RCCG).{' '}
            <b>
              Pastor E. A. Adeboye is the General Overseer of RCCG Worldwide,
              and Pastor Olusegun Olowookere is the pioneer and senior pastor of
              the Parish.
            </b>
          </Text>
          <Text py={4}>
            As a Bible believing, and God-fearing church,{' '}
            <b>we teach and encourage a life of holiness.</b> House of Grace has
            an appeal to all types of people, with a determination to teach and
            impart people to excel in their various geographical areas, stages
            of secular life and levels of spiritual development.
          </Text>
          <CustomButton
            height="55px"
            width="264px"
            variant="outline"
            _hover={{ bg: '#B3D7D1' }}
            borderColor="white"
            color="white"
            _focus="teal.800"
            fontSize="21px"
            fontWeight="400"
            marginTop={10}
            content="LEARN MORE"
          />
        </Box>
        <Image src="/assets/about_us.png" alt="About us" objectFit="cover" />
      </Flex>
      <Box>
        <Box py="80px" margin="0 80px">
          <SubHeading color="#3AC7B1" marginBottom="16px">
            Where to find us
          </SubHeading>
          <MainHeading fontSize="36px" marginBottom="28px">
            WORSHIP WITH US
          </MainHeading>
          <SimpleGrid columns={2} spacing={12}>
            <AspectRatioBox ratio={16 / 9}>
              <Box
                as="iframe"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.979823200833!2d-97.36485948493838!3d27.687018482800358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8668f5cdf44848ed%3A0x5015a69c9848f5cb!2s2306%20Airline%20Rd%20%23110A%2C%20Corpus%20Christi%2C%20TX%2078414%2C%20USA!5e0!3m2!1sen!2sng!4v1588706338081!5m2!1sen!2sng"
                alt="demo"
              />
            </AspectRatioBox>
            <Box>
              <Image src="/assets/church.png" alt="House of Grace" />
              <MainHeading fontSize="21px" paddingTop="20px">
                RCCG HOUSE OF GRACE
              </MainHeading>
              <Text>
                Spreading the Word of God to the ends of the earth with the aims
                of leading individuals to Christ.
              </Text>
              <Flex alignItems="center" paddingTop="10px">
                <Icon name="phone" color="#3AC7B1" marginRight="20px" />
                <Text>3617569889</Text>
              </Flex>
              <Flex alignItems="center" paddingTop="10px">
                <Box as={FaMapMarkerAlt} color="#3AC7B1" marginRight="20px" />
                <Text>
                  2306 Airline Road, Unit 110A, Corpus Christi, TX 78414
                </Text>
              </Flex>
              <Flex alignItems="center" paddingTop="10px">
                <Icon name="email" color="#3AC7B1" marginRight="20px" />
                <Text>rccghogcorpuschristi@gmail.com</Text>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default HomePage;

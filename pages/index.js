import React from 'react';
import {
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Heading,
  Button,
  SimpleGrid,
} from '@chakra-ui/core';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/SubHeading';
import Navigation from '../components/Navigation';
import SideSermonList from '../components/SideSermonList';
import ServicesHomeList from '../components/ServicesHomeList';
import LatestNewsList from '../components/LatestNewsList';

function HomePage({ color, children, fontSize, heading, subheading, content }) {
  return (
    <Box>
      <Box
        backgroundImage="url(/assets/Banner_home.png)"
        objectFit="contain"
        paddingBottom={20}
      >
        <Navigation />
        <Box textAlign="center" marginTop={150} color="white">
          <SubHeading color="#3AC7B1" fontSize="26px">
            Welcome to Redeemed Christian Church of God
          </SubHeading>
          <MainHeading fontSize={64} marginBottom="24px">
            THE PLACE TO BE
          </MainHeading>
          <Text fontSize="26px" fontWeight="300" marginBottom="60px">
            Worship with us Sundays at 9:30am
          </Text>
          <Button variantColor="teal" size="lg">
            WATCH SERVICE ONLINE
          </Button>
        </Box>
      </Box>
      <Box py="80px" margin="0 80px">
        <SubHeading color="#3AC7B1" marginBottom="16px">
          Watch our services online
        </SubHeading>
        <MainHeading fontSize="36px" marginBottom="28px">
          OUR LATEST SERMONS
        </MainHeading>
        <Stack direction="row" spacing={4} width="100%">
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80"
            width="632px"
            height="420px"
            objectFit="cover"
          />
          <SideSermonList />
        </Stack>
        <Box textAlign="center">
          <Button
            variant="outline"
            variantColor="teal"
            size="lg"
            marginTop={20}
          >
            VIEW MORE SERMONS
          </Button>
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
          <Button
            variant="outline"
            variantColor="teal"
            size="lg"
            marginTop={20}
          >
            VIEW MORE SERMONS
          </Button>
        </Box>
        <Flex paddingTop="80px">
          <Image
            src="/assets/pastor_image.png"
            alt="Pastor Segun Olowookere"
            size="750px"
          />
          <Box backgroundColor="#61817C" width="100%" px={10} paddingTop={12}>
            <SubHeading color="#3AC7B1">Welcome Address</SubHeading>
            <MainHeading fontSize="24px" color="white" paddingBottom={4}>
              WELCOME TO THE REDEEMED CHRISTIAN CHURCH OF GOD HOUSE OF GRACE,
              CORPUS CHRISTI!
            </MainHeading>

            <Text color="white" py={2}>
              We are so overwhelmed with Joy that God has brought you here. In
              this church we believe that we will experience God’s Divine’s
              Grace abundantly, and that prayer is the gateway to God. Our
              congregation is filled with people eager to experience and seek
              God in a way they have never done before. Jesus touches us daily
              and our lives are being transformed.
            </Text>
            <Text color="white" py={2}>
              We start off our day by committing our ways to the lord as a
              church, and we continue to encourage ourselves throughout the week
              with our Tuesday Bible Study, Wednesday Hour with Jesus, and
              monthly Friday Holy Ghost nights. We promise that your life will
              never remain the same, and that our church will help catapult your
              walk with Christ.
            </Text>
            <Text color="white" py={2}>
              Our prayer for you is that God’s unmerited favor will reign in
              your life and that of your family. God Bless you, and Welcome to
              our Church.
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
          paddingTop={12}
          color="white"
        >
          <SubHeading>Get to know us better</SubHeading>
          <MainHeading fontSize="36px">MORE ABOUT US</MainHeading>
          <Text py={4}>
            RCCG House of Grace based in Corpus Christi Texas is a Parish of the
            Redeemed Christian Church of God (RCCG). Pastor E. A. Adeboye is the
            General Overseer of RCCG Worldwide, and Pastor Olusegun Olowookere
            is the pioneer and senior pastor of the Parish.
          </Text>
          <Text py={4}>
            As a Bible believing, and God-fearing church, we teach and encourage
            a life of holiness. House of Grace has an appeal to all types of
            people, with a determination to teach and impart people to excel in
            their various geographical areas, stages of secular life and levels
            of spiritual development.
          </Text>
          <Button
            variantColor="white"
            size="lg"
            variant="outline"
            marginTop={10}
          >
            LEARN MORE
          </Button>
        </Box>
        <Image src="/assets/about_us.png" alt="About us" />
      </Flex>
    </Box>
  );
}

export default HomePage;

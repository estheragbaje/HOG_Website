import React from 'react';
import {
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Heading,
  Button,
} from '@chakra-ui/core';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/SubHeading';
import SideSermon from '../components/SideSermon';
import IconCard from '../components/IconCard';
import Navigation from '../components/Navigation';
import SideSermonList from './SideSermonList';
import ServicesHomeList from '../components/ServicesHomeList';

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
      <Box py="80px" backgroundColor="#F7F8F7">
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
      </Box>
    </Box>
  );
}

export default HomePage;

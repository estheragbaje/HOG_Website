import { Box, SimpleGrid, Text, Flex, Image } from '@chakra-ui/core';
import React from 'react';
import { CustomButton, FlexCard, TextImage } from '../components/Common';
import { Footer } from '../components/Footer';
import MainHeading from '../components/MainHeading';
import Navigation from '../components/Navigation';
import SubHeading from '../components/SubHeading';
import WeeklyServicesList from '../components/WeeklyServicesList';

function Services({ content }) {
  return (
    <Box maxWidth="100%">
      <Box
        backgroundImage="url(/assets/about_us_bg.jpg) "
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
            WEEKLY SERVICES
          </MainHeading>
        </Box>
      </Box>

      <Box
        py="80px"
        // margin={['0 40px', '0 40px', '0 80px']}
        textAlign="center"
        bg="#F7F8F7"
      >
        <SubHeading color="#3AC7B1" marginBottom="16px">
          We are Passionate About Sharing the Gospel of Jesus
        </SubHeading>
        <MainHeading fontSize={['24px', '24px', '36px']} marginBottom="28px">
          ATTEND OUR WEEKLY SERVICES
        </MainHeading>
        <WeeklyServicesList />
      </Box>
      <Flex
        direction={['column', 'column', 'row']}
        justifyContent="space-between"
        margin={['0 40px', '0 40px', '0 80px']}
        paddingY="80px"
      >
        <Box minW="300px">
          <SubHeading color="#3AC7B1" marginBottom="16px">
            Get to know about upcoming events
          </SubHeading>
          <MainHeading fontSize={['24px', '24px', '36px']} marginBottom="28px">
            ATTEND OUR EVENTS
          </MainHeading>

          <Text py={4}>
            At RCCG House of Grace, we organise and host events that would not
            only strengthen your spiritual lives but also make you relevant and
            a blessing to the society.
          </Text>
          <Text py={4}>We would love you to join us at the next events.</Text>
          <CustomButton
            href="/events"
            height={['44px', '44px', '55px']}
            px={['20px', '20px', '30px']}
            variant="outline"
            _hover={{ bg: '#D0FFF8' }}
            borderColor="#3AC7B1"
            color="#3AC7B1"
            _focus="teal.800"
            fontSize={['16px', '16px', '21px']}
            fontWeight="400"
            marginTop={20}
            content="VIEW ALL EVENTS"
          />
        </Box>
        <Box size={['24px', '24px', '50px']} flexShrink="0"></Box>
        <Image
          src="/assets/about_us.png"
          alt="what we believe"
          maxWidth="550px"
          objectFit="cover"
          // flexShrink="0"
          borderRadius="10px"
        />
      </Flex>
      <Footer />
    </Box>
  );
}

export default Services;

import { AspectRatioBox, Box, SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import { MessageCard } from '../components/Common';
import { Footer } from '../components/Footer';
import Navigation from '../components/Navigation';
import MainHeading from '../components/MainHeading';

function Sermon({ content, ...rest }) {
  return (
    <Box maxWidth="100%">
      <Box
        backgroundImage="url(/assets/about_us_bg.jpg) "
        backgroundSize="cover"
        // paddingBottom={['60px', '110px', '120px']}
        backgroundColor="gray.700"
        style={{ backgroundBlendMode: 'overlay' }}
      >
        {' '}
        }
        <Navigation />
      </Box>
      <Box m={[10, 10, 20]} margin="auto">
        <AspectRatioBox maxW="1200px" ratio={1}>
          <Box
            as="iframe"
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatioBox>
        <MessageCard
          topic="The divine blessings of God through Abraham"
          day="Sunday"
          date="3.03.20"
          minister="Pastor Segun Olowookere"
        />
      </Box>
      <Box m={[10, 10, 20]} margin="auto">
        <MainHeading
          fontSize={['20px', '20px', '32px']}
          textAlign="center"
          py={4}
        >
          RELATED MESSAGES
        </MainHeading>
        <SimpleGrid
          columns={[1, 1, 3]}
          spacing={10}
          py={5}
          px={['12px', '12px', '0px']}
          {...rest}
        >
          <MessageCard
            src="/assets/about_us.png"
            topic="The divine blessings of God through Abraham"
            date="3.03.20"
            minister="Pastor Segun Olowookere"
            day="Sunday"
          />
          <MessageCard
            src="/assets/about_us.png"
            topic="The divine blessings of God through Abraham"
            date="3.03.20"
            minister="Pastor Segun Olowookere"
            day="Sunday"
          />
          <MessageCard
            src="/assets/about_us.png"
            topic="The divine blessings of God through Abraham"
            date="3.03.20"
            minister="Pastor Segun Olowookere"
            day="Sunday"
          />
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
}

export default Sermon;

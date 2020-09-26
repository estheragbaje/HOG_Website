import { AspectRatioBox, Box, SimpleGrid, Text } from '@chakra-ui/core';
import React from 'react';
import { MessageCard } from '../../components/Common';
import { Footer } from '../../components/Footer';
import Navigation from '../../components/Navigation';
import MainHeading from '../../components/MainHeading';
import MessageList from '../../components/MessageList';

function Sermon({ content, sermon, sermons, ...rest }) {
  return (
    <Box maxWidth='100%'>
      <Box
        backgroundImage='url(/assets/about_us_bg.jpg) '
        backgroundSize='cover'
        // paddingBottom={['60px', '110px', '120px']}
        backgroundColor='gray.700'
        style={{ backgroundBlendMode: 'overlay' }}
      >
        {' '}
      </Box>
      <Box m={[8, 8, 16]} margin='auto'>
        <AspectRatioBox maxW='600px' margin='auto' ratio={4 / 3}>
          <Box
            as='iframe'
            title={sermon.Topic}
            src={sermon.Video_url}
            allowFullScreen
          />
        </AspectRatioBox>
        <Box m={4}>
          <Text textAlign='center'>{sermon.Topic}</Text>
          <Text textAlign='center'>{sermon.Preacher}</Text>
        </Box>

        {/* <MessageCard
          topic='The divine blessings of God through Abraham'
          day='Sunday'
          date='3.03.20'
          minister='Pastor Segun Olowookere'
        /> */}
        {/* <MessageCard /> */}
      </Box>
      <Box m={[10, 10, 20]} margin='auto'>
        <MainHeading
          fontSize={['20px', '20px', '32px']}
          textAlign='center'
          py={4}
        >
          MORE MESSAGES
        </MainHeading>
        {/* <SimpleGrid
          columns={[1, 1, 3]}
          spacing={10}
          py={5}
          // px={['12px', '12px', '0px']}
          {...rest}
        > */}
        <MessageList sermons={sermons} />
        {/* </SimpleGrid> */}
      </Box>
      <Footer />
    </Box>
  );
}

// export async function getServerSideProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(
//     `https://hog-website.herokuapp.com/sermons/${params.id}`
//   );
//   const res2 = await fetch(
//     'https://hog-website.herokuapp.com/sermons/?_limit=3'
//   );

//   const sermon = await res.json();
//   const sermons = await res2.json();

//   // Pass post data to the page via props
//   return { props: { sermon, sermons } };
// }

export async function getStaticProps() {
  const res = await fetch(
    'https://hog-website.herokuapp.com/sermons/?_limit=3'
  );

  const sermons = await res.json();

  return {
    props: {
      sermons,
    },
  };
}

export default Sermon;

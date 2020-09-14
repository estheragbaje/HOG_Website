import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  SimpleGrid,
} from '@chakra-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Footer } from '../../components/Footer';
import MainHeading from '../../components/MainHeading';
import MessageList from '../../components/MessageList';
import SubHeading from '../../components/SubHeading';
import { MessageCard } from '../../components/Common';

function Sermons({ sermons, ...rest }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = sermons.filter((sermon) =>
      sermon.Topic.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <Box maxWidth='100%'>
      <Box
        backgroundImage='url(/assets/sermons.jpg) '
        backgroundSize='cover'
        paddingY={['60px', '110px', '120px']}
        backgroundColor='gray.700'
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <Box textAlign='center' color='white'>
          <SubHeading
            color='#3AC7B1'
            fontSize={['18px', '18px', '26px', '26px']}
          >
            RCCG House of Grace
          </SubHeading>
          <MainHeading fontSize={['36px', '36px', '48px', '60px']}>
            SERMONS
          </MainHeading>
        </Box>
      </Box>

      <Box
        py='80px'
        margin='auto'
        maxWidth='1100px'
        marginX={['40px', '40px', '80px']}
        textAlign='left'
      >
        <Flex
          justifyContent='space-between'
          alignItems='left'
          direction={['column', 'column', 'row']}
        >
          <Box>
            <SubHeading color='#3AC7B1' marginBottom='16px'>
              Sermon Archive
            </SubHeading>
            <MainHeading
              fontSize={['24px', '24px', '36px']}
              marginBottom='28px'
            >
              VIEW MESSAGES
            </MainHeading>
          </Box>

          <InputGroup zIndex={0}>
            <InputLeftElement
              children={<Icon name='search' color='#3AC7B1' />}
            />
            <Input
              placeholder='Find Sermons'
              focusBorderColor='#3AC7B1'
              value={searchTerm}
              onChange={handleChange}
            />
          </InputGroup>
        </Flex>

        {/* <MessageList sermons={sermons} /> */}
        <SimpleGrid
          columns={[1, 1, 3]}
          spacing={10}
          py={5}
          px={['12px', '12px', '0px']}
          {...rest}
        >
          {searchResults.map((sermon) => (
            <Link href={`/sermons/${sermon.id}`}>
              <MessageCard
                src={sermon.Video_url}
                topic={sermon.Topic}
                date={sermon.Date}
                minister={sermon.Preacher}
                // day={sermon.Day}
              />
            </Link>
          ))}
        </SimpleGrid>
        <Button onClick={() => router.push(`/sermons?page=${page + 1}`)}>
          Next
        </Button>
      </Box>

      <Box
        backgroundImage='url(/assets/weekly_services.jpg) '
        backgroundSize='cover'
        backgroundColor='gray.600'
        style={{ backgroundBlendMode: 'overlay' }}
      >
        <Box
          py='80px'
          margin={['0 40px', '0 40px', '0 80px']}
          color='white'
          maxWidth='500px'
        >
          <SubHeading color='#3AC7B1' marginBottom='16px'>
            Get to know about our weekly activites
          </SubHeading>
          <MainHeading fontSize={['24px', '24px', '36px']} marginBottom='28px'>
            OUR WEEKLY SERVICES{' '}
          </MainHeading>
          <Box>
            <Text py={4}>
              While going to a church meeting on a Sunday is helpful, we can
              grow much deeper in the Christian life through regular fellowship
              with other brethren.
            </Text>
            <Text py={4}>
              While going to a church meeting on a Sunday is helpful, we can
              grow much deeper in the Christian life through regular fellowship
              with other brethren.
            </Text>
            <Link href='/services'>
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
                children='VIEW SERVICES'
                my={10}
              />
            </Link>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

// export async function getStaticProps({ query: { page = 1 } }) {
//   const res = await fetch(
//     'https://hog-website.herokuapp.com/sermons/?_limit=3'
//   );
//   const sermons = await res.json();

export async function getStaticProps() {
  const res = await fetch('https://hog-website.herokuapp.com/sermons/');
  const sermons = await res.json();

  return {
    props: {
      sermons,
    },
  };
}

export default Sermons;

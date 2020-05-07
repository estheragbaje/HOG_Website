import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/core';
import { CustomButton } from './Common';
import Footer from './Footer';

function AccordionList() {
  return (
    <Box>
      <Box margin={['0 40px', '0 40px', '0 80px']} paddingY="80px">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionHeader
              bg="#7C9C97"
              py={4}
              color="white"
              _hover={{ bg: '#5D7773' }}
            >
              <Box flex="1" textAlign="left">
                Bible
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel pb={4} bg="white">
              <Text py={4}>
                We believe that the Bible is “God’s Word”. The truths revealed
                in it did not have their origin with men, but with God. The Holy
                Spirit inspired the human authors of the Bible. We therefore
                believe that the bible is without error, completely true,
                relevant and an up-to-date book.
              </Text>
              <Text py={4}>
                We receive the sixty-six books of the Old and New Testament as
                eternal, authoritative, coherent, complete and all sufficient,
                and the only infallible rule of faith. Its message is intended
                primarily for the human race. It is expressed in words and in
                terms, which human beings can understand. It’s central theme and
                purpose is the salvation of man.
              </Text>
              <Text py={4}>
                2 Timothy 3: 16-17 <br />2 Peter 1:20-21 <br />
                Psalm 12:6 <br />
                Matthew 24:35 <br /> Psalm 119:160
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader
              bg="#7C9C97"
              py={4}
              color="white"
              _hover={{ bg: '#5D7773' }}
            >
              <Box flex="1" textAlign="left">
                Trinity
              </Box>
              <AccordionIcon />
            </AccordionHeader>
            <AccordionPanel pb={4} bg="white">
              <Text py={4}>
                We believe in the Divine Trinity. One Triune God exists in three
                Persons - Father, Son and Holy Spirit - eternal in being,
                identical in nature, equal in power and glory and having the
                same attributes and perfections
              </Text>
              <Text py={4}>
                Matthew 3:16-17 <br />2 Corinthians 13:14 <br />
                Hebrews 9:14 <br /> 1 Peter 1:2 <br />1 John 5:7
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Box textAlign="center">
          <CustomButton
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
            content="SEE ALL SERVICES"
          />
        </Box>
      </Box>
      
    </Box>
  );
}

export default AccordionList;

import React from 'react';
import { Box, Image, Text, Link, Stack, SimpleGrid } from '@chakra-ui/core';
import SubHeading from './SubHeading';
import MainHeading from './MainHeading';

function MiniNewsCard({ src, date, title, content, link, ...rest }) {
  return (
    <SimpleGrid
      columns={['1', '1', '2']}
      {...rest}
      spacing={5}
      margin="auto"
      maxWidth="700px"
    >
      <Image
        src={src}
        alt="title"
        objectFit="cover"

        // minWidth="274px"
        // minHeight="174px"
      />
      <Stack>
        <SubHeading fontSize="14px" color="#3AC7B1">
          {date}
        </SubHeading>
        <MainHeading fontSize="20px" marginBottom={0}>
          {title}
        </MainHeading>
        <Text>{content}</Text>
        <Link href={link} color="#3AC7B1">
          READ MORE
        </Link>
      </Stack>
    </SimpleGrid>
  );
}

export default MiniNewsCard;

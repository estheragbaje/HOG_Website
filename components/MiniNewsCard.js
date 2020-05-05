import React from 'react';
import { Box, Image, Text, Link, Stack, SimpleGrid } from '@chakra-ui/core';
import SubHeading from './SubHeading';
import MainHeading from './MainHeading';

function MiniNewsCard({ src, date, title, content, link, ...rest }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} {...rest} spacing={6}>
      <Image
        src={src}
        alt="Title"
        objectFit="cover"
        width="274px"
        height="174px"
      />
      <Stack spacing={{ base: 2, md: 3, lg: 4 }}>
        <SubHeading fontSize="14px" color="#3AC7B1">
          {date}
        </SubHeading>
        <MainHeading fontSize="20px" marginBottom={0}>{title}</MainHeading>
        <Text>{content}</Text>
        <Link href={link} color="#3AC7B1">
          READ MORE
        </Link>
      </Stack>
    </SimpleGrid>
  );
}

export default MiniNewsCard;

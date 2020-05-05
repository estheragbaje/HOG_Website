import React from 'react';
import { Box, Image, Text, Link, Stack } from '@chakra-ui/core';
import SubHeading from './SubHeading';
import MainHeading from './MainHeading';

function MiniNewsCard({ src, date, title, content, link, ...rest }) {
  return (
    <Stack direction="row" {...rest} spacing={6}>
      <Image src={src} alt="Title" objectFit="cover" />
      <Stack spacing={4}>
        <SubHeading fontSize="14px" color="#3AC7B1">
          {date}
        </SubHeading>
        <MainHeading fontSize="20px">{title}</MainHeading>
        <Text>{content}</Text>
        <Link href={link} color="#3AC7B1">
          READ MORE
        </Link>
      </Stack>
    </Stack>
  );
}

export default MiniNewsCard;

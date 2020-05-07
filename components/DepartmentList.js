import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/core';
import { TextImage } from './Common';

function DepartmentList() {
  return (
    <Box>
      <SimpleGrid columns={[2, 2, 3]} spacing={10} margin="0 auto">
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
        <TextImage
          src="/assets/about_us.png"
          alt="image"
          content="EVANGELISM"
        />
      </SimpleGrid>
    </Box>
  );
}

export default DepartmentList;

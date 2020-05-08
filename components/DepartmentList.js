import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/core';
import { TextImage } from './Common';

const departments = [
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
  { title: 'EVANGELISM', image: '/assets/about_us.png' },
];

function DepartmentList() {
  return (
    <Box>
      <SimpleGrid
        columns={[2, 2, 3]}
        spacing={5}
        maxWidth="1100px"
        marginX="auto"
        paddingX="12px"
      >
        {departments.map((department) => (
          <TextImage
            src={department.image}
            alt="image"
            content={department.title}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default DepartmentList;

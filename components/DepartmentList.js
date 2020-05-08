import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/core';
import { TextImage } from './Common';

const departments = [
  { title: 'CHOIR', image: '/assets/choir.jpg' },
  { title: 'USHERING', image: '/assets/ushering.jpg' },
  { title: 'EVANGELISM', image: '/assets/evangelism.jpeg' },
  { title: 'MISSION', image: '/assets/mission.jpg' },
  { title: 'DRAMA', image: '/assets/drama.jpeg' },
  { title: 'MEDIA', image: '/assets/media.jpeg' },
  { title: 'SANITATION', image: '/assets/sanitation.jpeg' },
  { title: 'PRAYER', image: '/assets/prayer.jpeg' },
  { title: 'WELFARE', image: '/assets/welfare.jpeg' },
  { title: 'VISITATION', image: '/assets/visitation.jpeg' },
  { title: 'COUNSELING', image: '/assets/counseling.jpeg' },
  { title: 'LIBRARY', image: '/assets/library.jpeg' },
];

function DepartmentList() {
  return (
    <Box py={10}>
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

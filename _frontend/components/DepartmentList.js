import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleGrid, Box } from '@chakra-ui/core';
import { TextImage } from './Common';

function DepartmentList({ departments }) {
  return (
    <Box>
      <SimpleGrid
        columns={[1, 1, 3]}
        spacing={10}
        py={5}
        px={['12px', '12px', '0px']}
      >
        {departments.map((department) => (
          <TextImage
            key={department.id}
            // src={`https://hog-website.herokuapp.com${department.Image.url}`}
            src={department.Image.url}
            alt={department.Name}
            content={department.Name}
            textTransform='uppercase'
            backgroundColor='gray.700'
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default DepartmentList;

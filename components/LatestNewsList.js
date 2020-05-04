import React from 'react';
import MiniNewsCard from './MiniNewsCard';
import { SimpleGrid, Box, Stack } from '@chakra-ui/core';

function LatestNewsList({ src, date, title, content, link, ...rest }) {
  return (
    <Box {...rest}>
      <SimpleGrid columns={2} spacing={20} direction="row">
        <MiniNewsCard
          src="/assets/good_friday.png"
          date="17.04.20"
          title="GOOD FRIDAY"
          content="There would be a good Friday hangout at the front of the church."
        />
        <MiniNewsCard
          src="/assets/palm.png"
          date="17.04.20"
          title="GOOD FRIDAY"
          content="There would be a good Friday hangout at the front of the church."
        />
        <MiniNewsCard
          src="/assets/praise.png"
          date="17.04.20"
          title="GOOD FRIDAY"
          content="There would be a good Friday hangout at the front of the church."
        />
        <MiniNewsCard
          src="/assets/palm2.png"
          date="17.04.20"
          title="GOOD FRIDAY"
          content="There would be a good Friday hangout at the front of the church."
        />
      </SimpleGrid>
    </Box>
  );
}

export default LatestNewsList;

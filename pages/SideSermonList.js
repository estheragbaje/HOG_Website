import React from 'react';
import { Stack } from '@chakra-ui/core';
import SideSermon from '../components/SideSermon';

function SideSermonList() {
  return (
    <Stack>
      <SideSermon
        date="Jun 5"
        service="Sunday Service"
        topic="THE LORD IS OUR SHEPHERD"
        isActive={true}
      />
      <SideSermon
        date="Jun 5"
        service="Bible Study"
        topic="KNOWING GOD"
        isActive={false}
      />
      <SideSermon
        date="Jun 5"
        service="Bible Study"
        topic="KNOWING GOD"
        isActive={false}
      />
      <SideSermon
        date="Jun 5"
        service="Bible Study"
        topic="KNOWING GOD"
        isActive={false}
      />
    </Stack>
  );
}

export default SideSermonList;

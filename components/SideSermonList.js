import React from 'react';
import { Stack } from '@chakra-ui/core';
import SideSermon from './SideSermon';

function SideSermonList() {
  return (
    <Stack spacing={4} justifyContent="space-between" >
      <SideSermon
        date="12"
        month="JUN"
        service="Sunday Service"
        topic="THE LORD IS OUR SHEPHERD"
        isActive={true}
      />
      <SideSermon
        date="5"
        month="JUN"
        service="Bible Study"
        topic="KNOWING GOD"
        isActive={false}
      />
      <SideSermon
        date="19"
        month="JUN"
        service="Bible Study"
        topic="KNOWING GOD"
        isActive={false}
      />
      <SideSermon
        date="5"
        month="JUN"
        service="Bible Study"
        topic="KNOWING GOD"
        isActive={false}
      />
    </Stack>
  );
}

export default SideSermonList;

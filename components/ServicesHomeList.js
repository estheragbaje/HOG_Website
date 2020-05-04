import React from 'react';
import { Stack, Icon } from '@chakra-ui/core';
import IconCard from './IconCard';

function ServicesHomeList({ ...rest }) {
  return (
    <Stack direction="row" my={12}>
      <IconCard
        heading="BIBLE STUDY"
        subheading="Tuesdays,  7:00pm - 8:30 pm"
        content="Our Bible Study is a time of digging deep into the Bible."
        borderColor="#3498AF"
      />
      <IconCard
        heading="AN HOUR WITH JESUS"
        subheading="Wednesdays,  11:00pm - 12.00 am"
        content="This is a time of intimate prayers to God."
        borderColor="#28166F"
      />
      <IconCard
        heading="HOLY COMMUNION"
        subheading="First Fridays,  10:00pm - 12.00 am"
        content="This is a time of intimate prayers to God."
        borderColor="#61817C"
      />
    </Stack>
  );
}

export default ServicesHomeList;

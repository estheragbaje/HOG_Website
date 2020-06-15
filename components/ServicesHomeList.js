import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Stack, Icon, SimpleGrid } from '@chakra-ui/core';
import IconCard from './IconCard';
import { CupIcon, BibleIcon, ImageIcon } from './Icons';

function ServicesHomeList({ ...rest }) {
  
  return (
    <SimpleGrid
      columns={[1, 1, 3]}
      spacing={8}
      marginTop={12}
      px={['40px', '40px', '80px']}
      {...rest}
    >
      <IconCard
        icon={<BibleIcon height="45px" width="45px" margin="auto" />}
        heading="BIBLE STUDY"
        subheading="Tuesdays,  7:00pm - 8:30 pm"
        content="Our Bible Study is a time of digging deep into the Bible."
        borderColor="#3498AF"
      />
      <IconCard
        icon={<ImageIcon height="54px" width="54px" margin="auto" />}
        heading="AN HOUR WITH JESUS"
        subheading="Wednesdays,  11:00pm - 12.00 am"
        content="This is a time of refreshing and intimate prayers to God."
        borderColor="#28166F"
      />
      <IconCard
        icon={<CupIcon height="45px" width="45px" margin="auto" />}
        heading="HOLY COMMUNION"
        subheading="First Fridays,  10:00pm - 12.00 am"
        content="This is a time of refreshing and intimate prayers to God."
        borderColor="#61817C"
      />
    </SimpleGrid>
  );
}

export default ServicesHomeList;

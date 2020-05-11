import React from 'react';
import { SimpleGrid } from '@chakra-ui/core';
import { MessageCard } from './Common';

function MessageList({ ...rest }) {
  return (
    <SimpleGrid
      columns={[1, 1, 3]}
      spacing={10}
      py={5}
      px={['12px', '12px', '0px']}
      {...rest}
    >
      <MessageCard
        src="/assets/about_us.png"
        topic="The divine blessings of God through Abraham"
        date="3.03.20"
        minister="Pastor Segun Olowookere"
        day="Sunday"
      />
      <MessageCard
        src="/assets/about_us.png"
        topic="The divine blessings of God through Abraham"
        date="3.03.20"
        minister="Pastor Segun Olowookere"
        day="Sunday"
      />
      <MessageCard
        src="/assets/about_us.png"
        topic="The divine blessings of God through Abraham"
        date="3.03.20"
        minister="Pastor Segun Olowookere"
        day="Sunday"
      />
      <MessageCard
        src="/assets/about_us.png"
        topic="The divine blessings of God through Abraham"
        date="3.03.20"
        minister="Pastor Segun Olowookere"
        day="Sunday"
      />
      <MessageCard
        src="/assets/about_us.png"
        topic="The divine blessings of God through Abraham"
        date="3.03.20"
        minister="Pastor Segun Olowookere"
        day="Sunday"
      />
      <MessageCard
        src="/assets/about_us.png"
        topic="The divine blessings of God through Abraham"
        date="3.03.20"
        minister="Pastor Segun Olowookere"
        day="Sunday"
      />
      <MessageCard
        src="/assets/about_us.png"
        topic="The divine blessings of God through Abraham"
        date="3.03.20"
        minister="Pastor Segun Olowookere"
        day="Sunday"
      />
      <MessageCard
        src="/assets/about_us.png"
        topic="The divine blessings of God through Abraham"
        date="3.03.20"
        minister="Pastor Segun Olowookere"
        day="Sunday"
      />
      <MessageCard
        src="/assets/about_us.png"
        topic="The divine blessings of God through Abraham"
        date="3.03.20"
        minister="Pastor Segun Olowookere"
        day="Sunday"
      />
    </SimpleGrid>
  );
}

export default MessageList;

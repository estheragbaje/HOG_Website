import React from 'react';
import { Stack } from '@chakra-ui/core';
import Link from 'next/link';
import SideSermon from './SideSermon';

function SideSermonList({ sermons, isActive }) {
  return (
    <Stack spacing={4} justifyContent='space-between'>
      {sermons.map((message) => {
        return (
          <Link key={message.id} href={`/messages/${message.id}`}>
            <SideSermon
              date={message.Date}
              service='Sunday Service'
              topic={message.Topic}
            />
          </Link>
        );
      })}
    </Stack>
  );
}

export default SideSermonList;

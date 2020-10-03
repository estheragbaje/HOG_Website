import React from 'react';
import { SimpleGrid } from '@chakra-ui/core';
import { MessageCard } from './Common';

function MessageList({ sermons, ...rest }) {
  return (
    <SimpleGrid
      columns={[1, 1, 3]}
      spacing={10}
      py={5}
      px={['12px', '12px', '0px']}
      {...rest}
    >
      {sermons.map((sermon) => {
        return (
          <MessageCard
            key={sermon.id}
            src={sermon.Video_url}
            topic={sermon.Topic}
            date={sermon.Date}
            minister={sermon.Preacher}
          />
        );
      })}
    </SimpleGrid>
  );
}

export default MessageList;

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
      {sermons.map((message) => {
        return (
          <MessageCard
            key={message.id}
            src={message.Video_url}
            topic={message.Topic}
            date={message.Date}
            minister={message.Preacher}
          />
        );
      })}
    </SimpleGrid>
  );
}

export default MessageList;

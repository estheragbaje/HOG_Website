import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SermonMessageModel } from "../services/providers/api-models";
import { MessageCard } from "./Common";

interface MessageListProps {
	sermons: SermonMessageModel[];
	[prop: string]: any;
}

function MessageList({ sermons, ...rest }: MessageListProps) {
	return (
		<SimpleGrid
			columns={[1, 1, 3]}
			spacing={10}
			py={5}
			px={["12px", "12px", "0px"]}
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

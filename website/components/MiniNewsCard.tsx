import React from "react";
import { Box, Image, Text, Link, SimpleGrid, Flex } from "@chakra-ui/core";
import SubHeading from "./SubHeading";
import MainHeading from "./MainHeading";

interface MiniNewsCardProps {
	src?: string;
	date?: any;
	title?: any;
	content?: any;
	link?: any;
	events?: any;
	event?: any;
	params?: any;
	[prop: string]: any;
}

function MiniNewsCard({
	src,
	date,
	title,
	content,
	link,
	events,
	event,
	params,
	...rest
}: MiniNewsCardProps) {
	const max_length = 80;
	return (
		<SimpleGrid columns={[1, 1, 1, 2]} {...rest} spacing={8} margin="auto">
			{events.map((event) => (
				<SimpleGrid key={event.id} columns={[1, 1, 2]} spacing={4}>
					<Image
						src={event.Image.url}
						alt={event.Title}
						objectFit="contain"
						borderRadius="5px"
					/>
					<Box>
						<SubHeading fontSize="14px" color="#3AC7B1">
							{event.Date}
						</SubHeading>
						<MainHeading
							fontSize="20px"
							marginBottom={0}
							textTransform="uppercase"
						>
							{event.Title}
						</MainHeading>
						{/* {Description? Description.slice(0, max_length)} */}

						<Text>{event.Description.slice(0, max_length)}...</Text>
						<Link href={`/events/${event.id}`} color="#3AC7B1">
							READ MORE
						</Link>
					</Box>
				</SimpleGrid>
			))}
			<Box></Box>
		</SimpleGrid>
	);
}

export default MiniNewsCard;

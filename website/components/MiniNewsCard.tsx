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
		<Box paddingLeft={["0px", "50px"]}>
			<SimpleGrid
				maxWidth="900px"
				// background="green"
				columns={[1, 1, 1, 2]}
				{...rest}
				spacing={["30px", "80px"]}
				margin="auto"
				paddingX={["20px", "10px"]}
			>
				{events.map((event) => (
					<SimpleGrid key={event.id} columns={[1, 1, 1]} spacing={0}>
						{/* <Image
						src={event.Image.url}
						alt={event.Title}
						objectFit="contain"
						borderRadius="5px"
					/> */}
						<Box
							width="100%"
							maxWidth="400px"
							// background="orange"
						>
							<SubHeading fontSize="14px" color="#3AC7B1" marginBottom="10px">
								{event.Date}
							</SubHeading>
							<MainHeading fontSize="20px" textTransform="uppercase">
								{event.Title}
							</MainHeading>
							{/* {Description? Description.slice(0, max_length)} */}

							<Text>{event.Description.slice(0, max_length)}...</Text>
							<Link href={`/events/${event.id}`} color="#3AC7B1">
								<Text marginTop="5px" fontSize="15px">
									READ MORE
								</Text>
							</Link>
						</Box>
					</SimpleGrid>
				))}
				<Box></Box>
			</SimpleGrid>
		</Box>
	);
}

export default MiniNewsCard;

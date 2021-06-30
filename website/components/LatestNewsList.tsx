import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MiniNewsCard from "./MiniNewsCard";

interface LatestNewsListProps {
	src: string;
	[prop: string]: any;
}

function LatestNewsList({ src, ...rest }: LatestNewsListProps) {
	return (
		<Box {...rest}>
			<SimpleGrid
				columns={[1, 1, 2]}
				spacing={[10, 10, 20]}
				// @ts-ignore
				direction={["column", "column", "row"]}
			>
				<MiniNewsCard
					src="/assets/good_friday.png"
					date="17.04.20"
					title="GOOD FRIDAY"
					content="There would be a good Friday hangout at the front of the church."
				/>
				<MiniNewsCard
					src="/assets/palm.png"
					date="17.04.20"
					title="GOOD FRIDAY"
					content="There would be a good Friday hangout at the front of the church."
				/>
				<MiniNewsCard
					src="/assets/praise.png"
					date="17.04.20"
					title="GOOD FRIDAY"
					content="There would be a good Friday hangout at the front of the church."
				/>
				<MiniNewsCard
					src="/assets/palm2.png"
					date="17.04.20"
					title="GOOD FRIDAY"
					content="There would be a good Friday hangout at the front of the church."
				/>
			</SimpleGrid>
		</Box>
	);
}

export default LatestNewsList;

import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BigDate } from "./Common";

interface SideSermonProps {
	service: string;
	topic: string;
	date: string;
	month?: any;
	[props: string]: any;
}

function SideSermon({ service, topic, date, month, ...rest }: SideSermonProps) {
	return (
		<Box
			bg="gray.50"
			border="solid 1px"
			borderColor="gray.200"
			transition="all 0.2s"
			_hover={{
				bg: "teal.50",
			}}
			borderRadius="5px"
			paddingY={3}
			marginY={2}
			as="button"
			{...rest}
		>
			<Stack direction="row" align="center" pr={2}>
				<BigDate bg="white" date={date} month={month} />
				<Stack textAlign="left">
					<Text fontWeight="medium" color="#3AC7B1">
						{service}
					</Text>
					<Text fontWeight="600">{topic}</Text>
				</Stack>
			</Stack>
		</Box>
	);
}

export default SideSermon;

import React from "react";
import { Stack } from "@chakra-ui/core";
import Link from "next/link";
import SideSermon from "./SideSermon";
import { SermonMessageModel } from "../services/providers/api-models";

interface SideSermonListProps {
	sermons: SermonMessageModel[];
}

function SideSermonList({ sermons }: SideSermonListProps) {
	return (
		<Stack spacing={4} justifyContent="space-between">
			{sermons.map((message) => {
				return (
					<Link key={message.id} href={`/messages/${message.id}`}>
						<SideSermon
							date={message.Date}
							service="Sunday Service" // TODO: this should come from sermon info
							topic={message.Topic}
						/>
					</Link>
				);
			})}
		</Stack>
	);
}

export default SideSermonList;

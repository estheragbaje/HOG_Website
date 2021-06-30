import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { TextImage } from "./Common";

function DepartmentList({ departments }) {
	return (
		<Box maxW="1600px" margin="auto">
			<SimpleGrid
				columns={[1, 1, 3]}
				spacing={10}
				py={5}
				px={["12px", "12px", "0px"]}
			>
				{departments.map((department) => (
					<TextImage
						key={department.id}
						src={department.Image ? department.Image.url : ""}
						alt={department.Name}
						content={department.Name}
						textTransform="uppercase"
						backgroundColor="gray.700"
					/>
				))}
			</SimpleGrid>
		</Box>
	);
}

export default DepartmentList;

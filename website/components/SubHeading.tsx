import React from "react";
import { Heading } from "@chakra-ui/core";

interface SubHeadingProps {
	children: any;
	fontSize?: any;
	color: any;
	[prop: string]: any;
}

function SubHeading({ children, fontSize, color, ...rest }: SubHeadingProps) {
	return (
		<Heading
			color={color}
			fontFamily="subheading"
			fontSize={fontSize}
			fontStyle="italic"
			fontWeight="500"
			marginBottom="24px"
			{...rest}
		>
			{children}
		</Heading>
	);
}

export default SubHeading;

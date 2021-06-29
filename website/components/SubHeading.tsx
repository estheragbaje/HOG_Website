import { Heading } from "@chakra-ui/react";
import React from "react";

interface SubHeadingProps {
	children: any;
	fontSize?: any;
	color?: any;
	marginBottom?: any;
	[prop: string]: any;
}

function SubHeading({
	children,
	fontSize,
	color,
	marginBottom,
	...rest
}: SubHeadingProps) {
	return (
		<Heading
			color={color}
			fontFamily="subheading"
			fontSize={fontSize}
			fontStyle="italic"
			fontWeight="500"
			marginBottom={marginBottom || "24px"}
			{...rest}
		>
			{children}
		</Heading>
	);
}

export default SubHeading;

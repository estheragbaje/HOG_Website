import React from "react";
import { Heading } from "@chakra-ui/core";

interface MainHeadingProps {
	children?: any;
	fontSize?: any;
	color?: any;
	[name: string]: any;
}

function MainHeading({ children, fontSize, color, ...rest }: MainHeadingProps) {
	return (
		<Heading color={color} fontSize={fontSize} {...rest}>
			{children}
		</Heading>
	);
}

export default MainHeading;

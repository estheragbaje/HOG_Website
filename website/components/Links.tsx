import React from "react";
import { PseudoBox, Box } from "@chakra-ui/core";

interface HoverLinkProps {
	link: string;
	label: string;
	[prop: string]: any;
}

export function HoverLink({ link, label, ...props }) {
	return (
		<PseudoBox
			as="a"
			display="inline-block"
			href={link}
			target="__blank"
			rel="nofollow noopener noreferrer"
			aria-label={label}
			transition="all 0.3s"
			_hover={{ transform: `translateY(-4px)`, color: "#3AC7B1" }}
			{...props}
		/>
	);
}

interface SocialLinkProps {
	icon: any;
	label: string;
	link: string;
	[prop: string]: any;
}

export function SocialLink({ icon, label, link, ...rest }: SocialLinkProps) {
	return (
		<Box as="li" {...rest}>
			<HoverLink link={link} label={label}>
				<Box size="30px" as={icon} />
			</HoverLink>
		</Box>
	);
}

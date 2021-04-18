import {
	Box,
	Button,
	Flex,
	Icon,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	PseudoBox,
	Stack,
	Text,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";

interface HoverBoxProps {
	isActive: boolean;
	children: any;
}
const HoverBox = ({ children, isActive }: HoverBoxProps) => {
	const [isHover, setIsHover] = useState(false);
	return (
		<Box
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			// background="red"
			padding="10px"
		>
			<Text
				color={isHover || isActive ? "teal.600" : "gray.600"}
				fontWeight={isHover || isActive ? "medium" : "medium"}
			>
				{children}
			</Text>
			<Box
				height="2px"
				background={isHover || isActive ? "teal" : "transparent"}
			/>
		</Box>
	);
};

function NavLink({ href, children }) {
	const { pathname } = useRouter();
	const isActive = pathname === href;

	const hoverStyle = {
		bg: "teal.600",
		color: "white",
		borderRadius: "8px",
		cursor: "pointer",
		transition: "all 0.2s",
	};

	return (
		<Link href={href}>
			<a>
				<HoverBox isActive={isActive}>{children}</HoverBox>
			</a>
		</Link>
	);
}

function SubmenuLink({ href, children, ...rest }) {
	return (
		<Link href={href}>
			<MenuItem _hover={{ bg: "teal.500" }} {...rest}>
				{children}
			</MenuItem>
		</Link>
	);
}

const CustomDropDownButton = ({ ...rest }: any) => {
	return <Box variant="unstyled" {...rest} />;
};

interface SubmenuItem {
	href: string;
	text: string;
}

interface NavLinkWithDropDownProps {
	isActive: boolean;
	submenuItemsList: SubmenuItem[];
}
const NavLinkWithDropDown = ({
	isActive,
	submenuItemsList,
}: NavLinkWithDropDownProps) => {
	return (
		<Menu>
			{({ onClose }) => (
				<>
					<MenuButton as={CustomDropDownButton} color="teal.500">
						<HoverBox isActive={isActive}>
							ABOUT
							<Icon name="chevron-down" />
						</HoverBox>
					</MenuButton>

					<MenuList color="teal.600" zIndex={2}>
						{submenuItemsList.map((el) => (
							<SubmenuLink href={el.href} onClick={onClose}>
								{el.text}
							</SubmenuLink>
						))}
					</MenuList>
				</>
			)}
		</Menu>
	);
};

function DesktopNav() {
	const { pathname } = useRouter();

	const hoverStyle = {
		bg: "teal.600",
		color: "white",
		borderRadius: "8px",
		cursor: "pointer",
		transition: "all 0.2s",
	};

	return (
		<Box>
			<Box
				boxShadow="0 1px 4px rgba(23,25,27,0.05)"
				position="sticky"
				top={0}
				zIndex={1}
				width="100%"
				backgroundColor="white"
				maxW="1600px"
				margin="auto"
			>
				<Box>
					<Flex
						justifyContent="space-between"
						alignItems="center"
						padding={4}
						color="white"
					>
						<a href="/">
							<Image
								src="/assets/rccg_logo.png"
								alt="logo"
								marginLeft="20px"
								size="60px"
								objectFit="cover"
							/>
						</a>
						<Stack
							isInline={true}
							spacing="50px"
							paddingRight="50px"
							textAlign="center"
							shouldWrapChildren
						>
							<NavLink href="/">HOME</NavLink>

							<NavLinkWithDropDown
								isActive={pathname.startsWith("/about")}
								submenuItemsList={[
									{ href: "/about/who_we_are", text: "WHO WE ARE" },
									{ href: "/about/what_we_believe", text: "WHAT WE BELIEVE" },
									{ href: "/about/our_departments", text: "OUR DEPARTMENTS" },
								]}
							/>

							<NavLink href="/events">EVENTS</NavLink>
							<NavLink href="/messages">SERMONS</NavLink>
							<NavLink href="/services">WEEKLY SERVICES</NavLink>
							<NavLink href="/give">GIVE</NavLink>
							<NavLink href="/contact">CONTACT</NavLink>
						</Stack>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
}

export default DesktopNav;

import {
  Box, Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList, Stack,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Appearance } from "./Appearance";

const footerColor = Appearance.primaryColor;

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
			padding="5px"
		>
			<Text
				color={isHover || isActive ? footerColor : "gray.600"}
				fontWeight={isHover || isActive ? "bold" : "bold"}
				fontSize="13px"
			>
				{children}
			</Text>
			<Box
				height="2px"
				background={isHover || isActive ? footerColor : "transparent"}
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
			{({ isOpen, onClose }) => (
				<Box onMouseLeave={onClose}>
					<MenuButton
						as={CustomDropDownButton}
						color="teal.500"
						// @ts-ignore
						variant="unstyled"
						_focus={{}}

						// onMouseEnter
					>
						<HoverBox isActive={isActive}>
							ABOUT
							<Icon name="chevron-down" />
						</HoverBox>
					</MenuButton>

					<MenuList color={footerColor} onClick={onClose}>
						{submenuItemsList.map((el, index) => (
							<SubmenuLink key={index} href={el.href}>
								{el.text}
							</SubmenuLink>
							// <MenuItem>{el.text}</MenuItem>
						))}
					</MenuList>
				</Box>
			)}
		</Menu>
	);
};

interface NavLogoProps {
  href: string; 
}
const NavLogo = (props: NavLogoProps) => {
  const maxSize="60px"
  return (
    <a href={props.href} >
      <Image
        src="/assets/rccg_logo.png"
        alt="logo"
        maxWidth={maxSize}
        maxH={maxSize}
        size={["40px", "60px"]}
        // objectFit="cover"
      />
    </a>
  )
}

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
		// <Box boxShadow="0 1px 4px rgba(23,25,27,0.05)">
			<Box
        // background="red"
				position="sticky"
				top={0}
				zIndex={1}
				width="100%"
				backgroundColor="white"
				maxW="1600px"
        paddingLeft="40px"
        paddingRight="40px"
        paddingTop="20px"
        paddingBottom="20px"
			>
					<Flex
						justifyContent="space-between"
						alignItems="center"
						// padding={4}
						// background="green"
					>
						<NavLogo href="/" /> 
						<Stack
							isInline={true}
							spacing="30px"
							textAlign="center"
							shouldWrapChildren
						>
							<NavLink href="/">HOME</NavLink>

							<NavLinkWithDropDown
								isActive={pathname.startsWith("/about")}
								submenuItemsList={[
									{ href: "/about/who_we_are", text: "WHO WE ARE" },
									{ href: "/about/what_we_believe", text: "WHAT WE BELIEVE" },
								]}
							/>

							<NavLink href="/services">WEEKLY SERVICES</NavLink>
							<NavLink href="/give">GIVE</NavLink>
							<NavLink href="/building-project"> BUILDING PROJECT </NavLink>
							<NavLink href={`${pathname}#contact`}>CONTACT</NavLink>
						</Stack>
					</Flex>
				</Box>
		
		// </Box>
	);
}

export default DesktopNav;

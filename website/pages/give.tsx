import React from "react";
import {
	Box,
	Text,
	Image,
	Flex,
	SimpleGrid,
	Button,
	Stack,
} from "@chakra-ui/core";
import Link from "next/link";
import SubHeading from "../components/SubHeading";
import MainHeading from "../components/MainHeading";
import { Footer } from "../components/Footer";
import { GetApiProvider } from "../services/providers/api-provider";

const CommonFontSize = ["17px", "19px"];

const OnlineGiving = () => {
	const apiProvider = GetApiProvider();
	return (
		<Box
			fontSize="18px"
			textAlign="left"
			height="100%"
			width="100%"
			// background="red"
		>
			<MainHeading
				fontSize={["18px", "18px", "24px"]}
				marginBottom="25px"
				textTransform="uppercase"
			>
				Online Giving
			</MainHeading>
			<Stack
				spacing="10px"
				direction="column"
				fontSize={CommonFontSize}
				marginBottom="15px"
			>
				<Text>
					You can make a recurring or one time giving.{" "}
					<strong>Your transaction will be processed through Tithe.ly. </strong>
				</Text>
				<Text>
					There is zero obligation to give, but rather an open avenue of worship
					to connect fully with the heart of God.
				</Text>
			</Stack>
			<Link href={apiProvider.give().getGivingUrl()}>
				<a target="_blank">
					<Button
						height={["44px", "44px", "55px"]}
						px={["20px", "20px", "30px"]}
						// variant="outline"
						variant="outline"
						_hover={{ bg: "#61CE70" }}
						borderColor="#61CE70"
						background="#61CE70"
						// @ts-ignore
						_focus="#61CE70"
						color="white"
						// _focus="teal.800"
						fontSize={["16px", "16px", "21px"]}
						fontWeight="400"
						marginTop={"10px"}
						children="GIVE ONLINE"
					/>
				</a>
			</Link>
		</Box>
	);
};

const TextGiving = () => {
	return (
		<Box textAlign="left" width="100%">
			<MainHeading
				fontSize={["18px", "18px", "24px"]}
				marginBottom="24px"
				textTransform="uppercase"
			>
				Text
			</MainHeading>
			<Stack direction="column" spacing={"10px"}>
				<Text fontSize={CommonFontSize}>
					You can make a one time giving by
					<strong> texting the amount HOGCC to 45888.</strong>
				</Text>
				<Text fontSize={CommonFontSize}>
					For example to give $10, text <strong>$10 HOGCC</strong> to 45888
				</Text>
			</Stack>
		</Box>
	);
};

function Give() {
	const apiProvider = GetApiProvider();
	return (
		<Box maxWidth="100%">
			<Box
				backgroundImage="url(/assets/about_us_bg.jpg) "
				backgroundSize="cover"
				paddingY={["60px", "110px", "120px"]}
				backgroundColor="gray.700"
				style={{ backgroundBlendMode: "overlay" }}
			>
				<Box
					textAlign="center"
					color="white"
					paddingX={["40px", "40px", "80px"]}
				>
					<SubHeading
						color="#3AC7B1"
						fontSize={["18px", "18px", "26px", "26px"]}
					>
						RCCG House of Grace
					</SubHeading>
					<MainHeading fontSize={["36px", "36px", "48px", "60px"]}>
						GIVE
					</MainHeading>
				</Box>
			</Box>

			<Box
				paddingTop={["30px", "80px"]}
				bg="#F7F8F7"
				paddingX={["20px", "40px", "80px"]}
				paddingBottom={["30px", "80px"]}
			>
				{/* <MainHeading
					fontSize={["18px", "24px", "36px"]}
					marginBottom={["40px"]}
					textTransform="uppercase"
					textAlign="center"
				>
					Give Tithes & Offerings
				</MainHeading> */}
				<Flex
					maxW={["700px"]}
					flexDirection="column"
					padding={["15px", "20px"]}
					textAlign="justify"
					// background="red"
					margin="auto"
				>
					<OnlineGiving />

					<Box marginTop={["50px", "80px"]}>
						<TextGiving />
					</Box>
				</Flex>
			</Box>

			<Footer />
		</Box>
	);
}

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default Give;

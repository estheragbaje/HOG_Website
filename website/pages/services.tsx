import React from "react";
import { Box, SimpleGrid, Text, Flex, Image, Button } from "@chakra-ui/core";
import Link from "next/link";
import { CustomButton, FlexCard, TextImage } from "../components/Common";
import { Footer } from "../components/Footer";
import MainHeading from "../components/MainHeading";
import Navigation from "../components/Navigation";
import SubHeading from "../components/SubHeading";
import WeeklyServicesList from "../components/WeeklyServicesList";
import { WeeklyServiceModel } from "../services/providers/api-models";
import { GetApiProvider } from "../services/providers/api-provider";

interface ServicesProps {
	services: WeeklyServiceModel[];
}

function Services({ services }: ServicesProps) {
	return (
		<Box maxWidth="100%">
			<Box
				backgroundImage="url(/assets/about_us_bg.jpg)"
				backgroundSize="cover"
				paddingY={["60px", "110px", "120px"]}
				backgroundColor="gray.700"
				style={{ backgroundBlendMode: "overlay" }}
			>
				<Box
					textAlign="center"
					paddingX={["40px", "40px", "80px"]}
					color="white"
				>
					<SubHeading
						color="#3AC7B1"
						fontSize={["18px", "18px", "26px", "26px"]}
					>
						RCCG House of Grace
					</SubHeading>
					<MainHeading fontSize={["36px", "36px", "48px", "60px"]}>
						WEEKLY SERVICES
					</MainHeading>
				</Box>
			</Box>

			<Box
				py={["40px", "80px"]}
				textAlign="center"
				paddingX={["40px", "40px", "80px"]}
				bg="#F7F8F7"
			>
				<Box maxW="1600px" margin="auto">
					<SubHeading color="#3AC7B1" marginBottom={["18px", "16px"]}>
						We are Passionate About Sharing the Gospel of Jesus
					</SubHeading>
					<MainHeading
						fontSize={["24px", "24px", "36px"]}
						marginBottom={["40px", "80px"]}
					>
						ATTEND OUR WEEKLY SERVICES
					</MainHeading>
					<WeeklyServicesList services={services} />
				</Box>
			</Box>

			<Footer />
		</Box>
	);
}

export async function getStaticProps() {
	const apiProvider = GetApiProvider();
	const services = await apiProvider.getWeeklyServices();

	return {
		props: {
			services,
		},
		revalidate: 1,
	};
}

export default Services;

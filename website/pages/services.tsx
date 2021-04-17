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
				backgroundImage="url(/assets/about_us_bg.jpg) "
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
				py="80px"
				textAlign="center"
				paddingX={["40px", "40px", "80px"]}
				bg="#F7F8F7"
			>
				<Box maxW="1600px" margin="auto">
					<SubHeading color="#3AC7B1" marginBottom="16px">
						We are Passionate About Sharing the Gospel of Jesus
					</SubHeading>
					<MainHeading fontSize={["24px", "24px", "36px"]} marginBottom="28px">
						ATTEND OUR WEEKLY SERVICES
					</MainHeading>
					<WeeklyServicesList services={services} />
				</Box>
			</Box>

			<Box maxW="1600px" margin="auto">
				<Flex
					direction={["column", "column", "column", "row"]}
					marginX={["40px", "40px", "80px"]}
					justifyContent="space-between"
					paddingY="80px"
				>
					<Box maxW="900px">
						<SubHeading color="#3AC7B1" marginBottom="16px">
							Get to know about upcoming events
						</SubHeading>
						<MainHeading fontSize={["24px", "24px", "36px"]}>
							ATTEND OUR EVENTS
						</MainHeading>
						<Text py={4}>
							At RCCG House of Grace, we organise and host events that would not
							only strengthen your spiritual lives but also make you relevant
							and a blessing to the society.
						</Text>
						<Text py={4}>We would love you to join us at the next events.</Text>

						<Link href="/events ">
							<Button
								height={["44px", "44px", "55px"]}
								px={["20px", "20px", "30px"]}
								variant="outline"
								_hover={{ bg: "#D0FFF8" }}
								borderColor="#3AC7B1"
								color="#3AC7B1"
								_focus="teal.800"
								fontSize={["16px", "16px", "21px"]}
								fontWeight="400"
								marginTop={20}
								children="VIEW ALL EVENTS"
							/>
						</Link>
					</Box>
					{/* <Box size={['24px', '24px', '50px']} flexShrink='0'></Box> */}
					<Image
						paddingLeft={["0px", "0px", "0px", "20px"]}
						src="/assets/about_us.png"
						alt="About us"
						maxWidth="550px"
						objectFit="cover"
						flexShrink={0}
						// objectFit='cover'
						minWidth="400px"
						// minHeight={['200px', '200px', '750px']}
						display={["none", "none", "none", "inline-block"]}
					/>
				</Flex>
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

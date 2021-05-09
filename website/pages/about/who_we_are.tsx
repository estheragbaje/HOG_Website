import { Box, Button, Text } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";
import AboutUsList from "../../components/AboutUsList";
import { FlexCard } from "../../components/Common";
import DepartmentList from "../../components/DepartmentList";
import { Footer } from "../../components/Footer";
import MainHeading from "../../components/MainHeading";
import SubHeading from "../../components/SubHeading";
import { GetApiProvider } from "../../services/providers/api-provider";

function WhoWeAre({ abouts, departments }) {
	return (
		<Box maxWidth="100%">
			<Box
				backgroundImage="url(/assets/hero_about_us.jpg) "
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
						ABOUT US
					</MainHeading>
				</Box>
			</Box>

			<Box py={["40px", "80px"]} textAlign="center" bg="#F7F8F7">
				<Box maxW={["1600px"]} margin="auto">
					<SubHeading color="#3AC7B1" marginBottom="16px">
						Get to know us better
					</SubHeading>
					<MainHeading fontSize={["24px", "24px", "36px"]} marginBottom="28px">
						WHO WE ARE
					</MainHeading>
					<AboutUsList abouts={abouts} />
				</Box>
			</Box>
			<Box margin="auto" p={["25px", "80px"]} maxW="1600px">
				<FlexCard
					heading="OUR VISION"
					src="/assets/our_vision.jpeg"
					alt="our vision"
				>
					RCCG has a vision to{" "}
					<b>
						spread the Word of God to the ends of the earth with the aims of
						leading individuals to Christ
					</b>
					, and encouraging these individuals to take as many as possible with
					them to heaven.
				</FlexCard>
				<FlexCard
					heading="OUR MISSION"
					src="/assets/our_vision.jpeg"
					alt="our vision"
					direction={["column", "column", "row-reverse"]}
					paddingTop={0}
					paddingBottom={80}
				>
					Spreading the Word of God to the ends of the earth with the aims of
					leading individuals to Christ, and{" "}
					<b>
						encouraging these individuals to take as many people as possible
						with them to heaven
					</b>
					. Making people to get the best from their God.
				</FlexCard>
			</Box>

			<Box
				backgroundImage="url(/assets/what_we_believe.jpeg) "
				backgroundSize="cover"
				backgroundColor="gray.600"
				style={{ backgroundBlendMode: "overlay" }}
			>
				<Box maxW="1600px" margin="auto">
					<Box
						py="80px"
						margin={["0 40px", "0 40px", "0 80px"]}
						color="white"
						maxWidth="400px"
					>
						<SubHeading color="#3AC7B1" marginBottom="16px">
							More About us
						</SubHeading>
						<MainHeading
							fontSize={["24px", "24px", "36px"]}
							marginBottom="28px"
						>
							WHAT WE BELIEVE
						</MainHeading>
						<Box>
							<Text py={4}>
								We at RCCG House of Grace get all of our beliefs directly from
								God, and strongly believe that only God can be held as the
								standard of what is moral and right.
							</Text>
							<Text py={4}>
								We believe Word & Spirit were the basis for the church’s
								formation on the day of Pentecost and, therefore, should be our
								foundation as well.{" "}
							</Text>
							<Link href="/about/what_we_believe">
								<Button
									type="submit"
									height={["44px", "44px", "55px"]}
									px={["20px", "20px", "30px"]}
									bg="#3AC7B1"
									_hover={{ bg: "#1FBDA5" }}
									_focus="teal.800"
									fontSize={["16px", "16px", "21px"]}
									fontWeight="400"
									color="white"
									children="LEARN MORE"
									my={10}
								/>
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>

			<Footer />
		</Box>
	);
}

export async function getStaticProps() {
	const apiProvider = GetApiProvider();
	const abouts = await apiProvider.getAbouts();
	const departments = await apiProvider.getDepartments({
		limit: 3,
	});

	return {
		props: {
			abouts,
			departments,
		},
		revalidate: 1,
	};
}

export default WhoWeAre;

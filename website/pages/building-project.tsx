import { Box, Button, Heading, Image, Text } from "@chakra-ui/core";
import Link from "next/link";
import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { GetApiProvider } from "../services/providers/api-provider";

interface ParagraphTextProps {
	children?: any;
	[prop: string]: any;
}
const ParagraphText = ({ children, ...rest }: ParagraphTextProps) => {
	return (
		<Text
			fontWeight="medium"
			opacity={0.7}
			textAlign="justify"
			fontSize={["13px", "15px"]}
			lineHeight="2em"
			{...rest}
		>
			{children}
		</Text>
	);
};

const GiveButton = ({ href }: any) => {
	return (
		<Link href={href}>
			<a target="_blank">
				<Button
					// height={["44px", "44px", "55px"]}
					// px={["20px", "20px", "30px"]}
					color="white"
					padding="20px"
					variant="outline"
					_hover={{ bg: "#61CE70" }}
					borderColor="#61CE70"
					background="#61CE70"
					// color="#3AC7B1"
					// @ts-ignore
					_focus="#61CE70"
					// fontSize={["16px", "16px", "21px"]}
					fontSize="15px"
					fontWeight="bold"
					children="Give towards our building project"
				/>
			</a>
		</Link>
	);
};

const BuildingProject = (props: any) => {
	// handlers
	const apiProvider = GetApiProvider();
	const buildingProjectGiveUrl = apiProvider.give().getBuildingProjectGiveUrl();

	return (
		<Box
			display="flex"
			flexDirection="column"
			// background="red"
			// justifyContent="center"
			height="100vh"
			// padding="50px"
			maxW="100%"
			alignItems="center"
		>
			<Box
				// background="red"
				marginTop={["40px", "80px"]}
				maxWidth="800px"
				marginBottom="50px"
				marginRight={["30px", "50px"]}
				marginLeft={["30px", "50px"]}
			>
				{/* Banner Image */}
				<Image src="/assets/building_project.jpeg" />

				{/* Give CTA  */}
				<Box width="100%" marginTop="50px" marginBottom="40px">
					<GiveButton href={buildingProjectGiveUrl} />
				</Box>

				{/* Paragraph 1 */}
				<ParagraphText>
					House of Grace is a young and vibrant parish of the Redeemed Christian
					Church of God, North America. We have experienced unmerited favor and
					answered prayers. Whether you are a student, young adult, a family
					with children or elderly, you will fit into our worship style and live
					or online programs. RCCG-HoG is located at 2306 Unit 110A, Airline
					Road, Corpus Christi, Tx 78414. Having obtained help of God, we
					continue to spread God’s love and the knowledge of His Word in Corpus
					Christi and surrounding areas. We have been blessed with a rich young
					adult community and love to keep extending our reach to impact nearby
					campuses of higher institutions (Del Mar College, Texas A&amp;M
					University in Corpus Christi &amp; Kingsville). However, just as the
					saying of the sons of the prophets, “the place where we meet is now
					too small for us”.
				</ParagraphText>

				{/* Heading */}
				<Heading fontSize="18px" marginTop="40px" marginBottom="20px">
					The Nehemiah Project
				</Heading>
				{/*  Paragraph 2 */}

				<ParagraphText>
					By the grace of God, we have purchased 1.8 acres of land and intend to
					build. We are in the process of fundraising for the Nehemiah Project.
					Phase 1 is the design-build phase with a goal of raising 1 million
					dollars for a 150-capacity worship and prayer sanctuary,
					administrative offices, breakout classrooms for children and young
					adults, media equipment spaces, mini kitchen and parking lot. From 1
					cent to a million dollars, whatever God lays on your heart will
					suffice. Your giving is a seed and every seed sown for the expansion
					of God’s kingdom count. We are grateful to God for giving you a heart
					for this vision and hope to see you at our grand opening in 2022.
				</ParagraphText>

				<ParagraphText marginTop="30px">
					Thank you for your love, prayers and support!
				</ParagraphText>

				<ParagraphText marginTop="30px">
					- Your RCCG-HOG Church Family
				</ParagraphText>

				{/* Give CTA  */}
				<Box width="100%" marginTop="40px" marginBottom={["20px", "40px"]}>
					<GiveButton href={buildingProjectGiveUrl} />
				</Box>
			</Box>

			<Footer />
		</Box>
	);
};

export async function getStaticProps() {
	// const provider = GetApiProvider();
	// const services = await provider.getWeeklyServices({
	// 	limit: 4,
	// 	sort: "updated_at:DESC",
	// });
	// const events = await provider.events().getEvents({
	// 	limit: 4,
	// 	sort: "updated_at:DESC",
	// });
	// const sermons = await provider.messages().getMessages({
	// 	limit: 4,
	// 	sort: "updated_at:DESC",
	// });

	return {
		props: {},
		revalidate: 1,
	};
}

export default BuildingProject;

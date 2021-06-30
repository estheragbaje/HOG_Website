import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import AccordionList from "../../components/AccordionList";
import { Footer } from "../../components/Footer";
import MainHeading from "../../components/MainHeading";
import { PageLayout } from "../../components/PageLayout";
import SubHeading from "../../components/SubHeading";
import { GetApiProvider } from "../../services/providers/api-provider";

function WhatWeBelieve({ beliefs }) {
	return (
    <PageLayout>

		<Box maxWidth="100%">
			<Box
				backgroundImage="url(/assets/we_believe.jpeg) "
				backgroundSize="cover"
				paddingY={["60px", "110px", "120px"]}
				backgroundColor="gray.700"
				style={{ backgroundBlendMode: "overlay" }}
			>
				<Box
					textAlign="center"
					// marginTop={['50px', '80px', '110px']}
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
						WHAT WE BELIEVE
					</MainHeading>
				</Box>
			</Box>
			<Box maxW="1600px" margin="auto">
				<Flex
					direction={["column", "column", "column", "row"]}
					marginX={["40px", "40px", "80px"]}
					justifyContent="center"
					paddingY="80px"
				>
					<Box maxW="900px" textAlign="justify">
						<SubHeading color="#3AC7B1" marginBottom="16px">
							Get to know us better
						</SubHeading>
						<MainHeading fontSize={["24px", "24px", "36px"]}>
							WHAT WE BELIEVE
						</MainHeading>
						<Text py={4}>
							We at RCCG House of Grace, get all of our beliefs directly from
							God, and strongly believe that only God can be held as the
							standard of what is moral and right.
						</Text>
						<Text py={4}>
							We believe Word & Spirit were the basis for the church’s formation
							on the day of Pentecost and, therefore, should be our foundation
							as well.
						</Text>
						<Text py={4}>
							We also believe that God stills speaks to us today. We can see
							this in many ways, it might be through prophecy or revelation but
							we always listen to what God might be saying to us. If we feel God
							has spoken we will weigh it against scripture to see if it's
							inline with God's word before we will let it guide us.
						</Text>
						{/* </Box> */}
					</Box>
					{/* <Box size={['24px', '24px', '50px']} flexShrink='0'></Box> */}
				
				</Flex>
			</Box>
			<Box backgroundColor="#F7F8F7">
				<Box maxW="1600px" margin="auto">
					<AccordionList beliefs={beliefs} />
				</Box>
				<Box textAlign="center">
					<Link href="/services ">
						<Button
							height={["44px", "44px", "55px"]}
							px={["20px", "20px", "30px"]}
							variant="outline"
							_hover={{ bg: "#D0FFF8" }}
							borderColor="#3AC7B1"
							color="#3AC7B1"
							// @ts-ignore
							_focus="teal.800"
							fontSize={["16px", "16px", "21px"]}
							fontWeight="400"
							marginY={20}
							children="SEE ALL SERVICES"
						/>
					</Link>
				</Box>
			</Box>
			<Footer />
		</Box>
          
    </PageLayout>
	);
}

export async function getStaticProps() {
	const apiProvider = GetApiProvider();
	const beliefs = await apiProvider.getBeliefs();

	return {
		props: {
			beliefs,
		},
		revalidate: 1,
	};
}

export default WhatWeBelieve;

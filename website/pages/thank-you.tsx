import React from "react";
import { Box, Button, Text } from "@chakra-ui/core";
import Link from "next/link";
import MainHeading from "../components/MainHeading";
import SubHeading from "../components/SubHeading";

function ThankYou() {
	return (
		<Box maxWidth="100%">
			<Box
				backgroundImage="url(/assets/thank-you.jpg)"
				backgroundSize="cover"
				paddingY={["60px", "110px", "140px"]}
				height="100vh"
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
						fontSize={["18px", "18px", "26px", "30px"]}
					>
						We're excited to hear from you
					</SubHeading>
					<MainHeading
						fontSize={["36px", "36px", "48px", "64px"]}
						marginBottom="24px"
					>
						THANKS FOR YOUR MESSAGE
					</MainHeading>
					<Text fontSize={["18px", "18px", "26px", "30px"]} marginBottom="60px">
						We will be in touch with you
					</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default ThankYou;

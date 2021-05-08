import React from "react";
import { Box, Button, Text } from "@chakra-ui/core";
import Link from "next/link";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";

interface ThankYouProps {
	onContinue: () => void;
}
function ThankYou({ onContinue }: ThankYouProps) {
	return (
		<Box maxWidth="100%" display="flex">
			<Box
				width="100%"
				backgroundImage="url(/assets/thank-you.jpg)"
				backgroundSize="cover"
				paddingY={["60px", "110px", "140px"]}
				height="100%"
				backgroundColor="gray.700"
				style={{ backgroundBlendMode: "overlay" }}
			>
				<Box textAlign="center" color="white" paddingX={["10px"]}>
					<SubHeading color="#3AC7B1" fontSize={["25px"]}>
						We've received your message, and are excited to hear from you
					</SubHeading>
					<MainHeading
						fontSize={["20px"]} //{[ "36px", "36px", "48px", "64px"]}
						marginBottom="24px"
					>
						THANKS FOR YOUR MESSAGE
					</MainHeading>
					<Text fontSize={["18px"]} marginBottom="60px">
						We will be in touch with you
					</Text>

					<Button
						bg="#3AC7B1"
						_hover={{ bg: "#1FBDA5" }}
						_focus="teal.800"
						onClick={onContinue}
					>
						Continue
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default ThankYou;

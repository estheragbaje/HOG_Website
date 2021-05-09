import { Box, Image, Link, SimpleGrid, Text } from "@chakra-ui/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FullModal } from "./FullModal";
import { SocialLink } from "./Links";
import MainHeading from "./MainHeading";
import ThankYou from "./thank-you";
import { ContactForm } from "./ContactForm";
import SubHeading from "./SubHeading";

export function FooterText({ ...rest }) {
	return (
		<section id="contact">
			<Box {...rest}>
				<Box textAlign={["center", "left", "left"]} maxW="1600px" margin="auto">
					<Image
						src="/assets/rccg_logo.png"
						alt="logo"
						size="60px"
						margin={["auto", "auto", "0"]}
					/>

					<Text color="white" py={[3, 3, 4]}>
						Welcome to the Redeemed Christian Church of God House of Grace,
						Corpus Christi! We are so overwhelmed with Joy that God has brought
						you here.
					</Text>

					<MainHeading
						color="white"
						fontSize="24px"
						display={["none", "none", "block"]}
					>
						CONNECT WITH US
					</MainHeading>
				</Box>
				<SimpleGrid
					listStyleType="none"
					columns={2}
					color="white"
					py={3}
					mx={["auto", "auto", 0]}
					paddingBottom={[0, 0, 0]}
					textAlign={["center", "center", "left"]}
					maxWidth="300px"
				>
					<SocialLink
						icon={FaFacebook}
						label="facebook"
						link="https://www.facebook.com/RCCGCORPUS"
					/>
					<SocialLink
						icon={FaYoutube}
						label="instagram"
						link="https://www.youtube.com/channel/UCXxVxc0iUgYaOvLWbsg0V-g"
					/>
				</SimpleGrid>
				<Box
					paddingTop={["5px", "5px", "10px"]}
					marginBottom="20px"
					textAlign={["center", "left"]}
				>
					<Text color="white" fontSize={["14px", "18px", "18px"]}>
						rccghogcorpuschristi@gmail.com
					</Text>
					<Text color="white" fontSize={["14px", "18px", "18px"]}>
						(361)756-9889
					</Text>
				</Box>
			</Box>
		</section>
	);
}

interface ThankYouModalProps {
	isOpen: boolean;
	onClose: () => void;
}
const ThankYouModal = ({ isOpen, onClose }: ThankYouModalProps) => {
	return (
		<FullModal isOpen={isOpen} onClose={onClose}>
			<ThankYou onContinue={onClose} />
		</FullModal>
	);
};

export function Footer() {
	// State
	const [uiStateIsSubmitting, setUiStateIsSubmitting] = useState(false);
	const [uiStateShowThankYouModal, setUiStateShowThankYouModal] = useState(
		false
	);

	const router = useRouter();

	const footerColor = "#042a4a"; //"#61817C"

	return (
		<>
			<ThankYouModal
				isOpen={uiStateShowThankYouModal}
				onClose={() => setUiStateShowThankYouModal(false)}
			/>
			<Box backgroundColor={footerColor} width="100%">
				<Box
					backgroundColor={footerColor}
					width="100%"
					maxW="1600px"
					margin="auto"
				>
					<Box margin={["0 40px", "0 40px", "0 80px"]} paddingTop="80px">
						<SubHeading color="white" marginBottom="16px">
							We would love to hear from you
						</SubHeading>
						<MainHeading
							color="white"
							// fontSize="36px"
							fontSize={["24px", "24px", "36px"]}
							py={4}
						>
							CONTACT US
						</MainHeading>
					</Box>

					<SimpleGrid
						columns={{ base: 1, md: 2, lg: 2 }}
						spacing={["10px", "12px", "60px"]}
						margin={["0 40px", "0 40px", "0 80px"]}
					>
						<ContactForm
							onFormSumbissionSuccessful={() => {
								setUiStateShowThankYouModal(true);
							}}
							onFormSubmissionFailed={() => {}}
							paddingBottom={["0", "0", "40px"]}
						/>
						<FooterText />
					</SimpleGrid>
				</Box>
				<Box
					backgroundColor={footerColor}
					textAlign="center"
					color="white"
					fontSize="12px"
					py={6}
				>
					<SubHeading marginBottom="0px" paddingX={["40px", "40px", "80px"]}>
						© 2021 RCCG House of Grace, Texas
					</SubHeading>
				</Box>
			</Box>
		</>
	);
}

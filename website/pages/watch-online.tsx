/**@jsx jsx */
import { Box } from "@chakra-ui/react";
import { jsx } from "@emotion/core";
import { Footer } from "../components/Footer";
import SubHeading from "../components/SubHeading";

function WatchOnline() {
	return (
		<Box maxWidth="100%" margin="auto">
			<Box
				textAlign="center"
				color="white"
				paddingX={["40px", "40px", "80px"]}
				paddingY={["30px", "60px", "60px"]}
			>
				<SubHeading color="#3AC7B1" fontSize={["18px", "18px", "26px", "26px"]}>
					Watch our Live Service
				</SubHeading>

				<Box>
					<div
						id="vidlive-embed-2844"
						css={{
							"#vidlive-placeholder": {
								margin: "0 auto",
							},
						}}
					/>
					<script src="https://www.vidlive.co/embed/2844/embed.js"></script>
				</Box>
			</Box>

			<Footer />
		</Box>
	);
}

export default WatchOnline;

import {
  Accordion, AccordionItem,
  AccordionPanel,
  Box,
  Text
} from "@chakra-ui/react";
import React from "react";
import { OurBeliefModel } from "../services/providers/api-models";

interface AccordionListProps {
	beliefs: OurBeliefModel[];
}

function AccordionList({ beliefs }: AccordionListProps) {
	return (
		<Box>
			<Box margin={["0 40px", "0 40px", "0 80px"]} paddingTop="80px">
				<Accordion defaultIndex={[0]} allowMultiple>
					{beliefs.map((belief) => (
						<AccordionItem>
							{/* <AccordionHeader
								bg={Appearance.primaryColor} //"#7C9C97"
								py={4}
								color="white"
								_hover={{ bg: Appearance.activePrimaryColor }}
							>
								<Box flex="1" textAlign="left">
									{belief.Name}
								</Box>
								<AccordionIcon />
							</AccordionHeader> */}
							<AccordionPanel pb={4} bg="white">
								<Text py={4}>{belief.Description}</Text>
							</AccordionPanel>
						</AccordionItem>
					))}
				</Accordion>
			</Box>
		</Box>
	);
}

export default AccordionList;

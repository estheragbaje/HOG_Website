import { Box, Button, Heading, Image, Input, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Footer } from "../components/Footer";
import { PageLayout } from "../components/PageLayout";
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
					color="white"
					padding="20px"
					variant="outline"
					_hover={{ bg: "#61CE70" }}
					borderColor="#61CE70"
					background="#61CE70"
					// color="#3AC7B1"
					// @ts-ignore
					_focus="#61CE70"
					fontSize="15px"
					fontWeight="bold"
					children="Give towards our building project"
				/>
			</a>
		</Link>
	);
};

interface IconLinkProps {
  iconSrc: string; 
  href: string; 
  [propname: string]: any; 
}

const IconLink = (props: IconLinkProps) => {
  return ( 
    <Link href={props.href}> 
     <a target="_blank"> 
      <Box 
        // background="red" 
        // borderColor="black"
        borderWidth="1px"
        borderRadius="5px"
        padding="30px"
        // paddingLeft="5px"
        // paddingRight="5px"
        shadow="md"
        maxW="200px" 
        height="90px" 
        flexDirection="row" 
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        
          <Image src={props.iconSrc} size="20px" height="80px" maxW="130px" /> 
       
      </Box>
      </a> 
      </Link>
  );
}

const GoFundMeLink = () => {
  return (
    <IconLink 
    href = "https://gofund.me/ea369f9d"
    iconSrc="/assets/go_fund_me_logo2.png" />
  )
}

const PayPal = () => {
  return (
    <Box 
    // borderColor="black" 
    height="100%"
    borderWidth="1px"
    shadow="md"
    padding={["20px","10px"]}
    borderRadius="5px"
    display="flex" 
    flexDirection="row" 
    justifyContent="center"
    alignItems="center"
    > 
   <form action="https://www.paypal.com/donate" method="post" target="_top">
      <Input _focus={{}} type="hidden" name="hosted_button_id" value="U68H58LP3HFYA" />
      <Input 
      _focus={{}}
      _focusVisible={{}}
      type="image" 
      src="/assets/paypal_logo2.png"
       border="0" 
       name="submit" 
       size="40px"
      maxW="200px"
      //  maxH="80px"
      width="150px"
       height="60px"
      title="PayPal - The safer, easier way to pay online!" 
      alt="Donate with PayPal button" />

      {/* <Img alt="" border="0"  src="/assets/paypal_logo2.png" width="10px" /> */}
    </form>
    </Box>
 
  )
}

interface GivingOptionsProps {
  buildingProjectGiveUrl: string; 
}

const GivingOptions = (props: GivingOptionsProps) => {
  return ( 
    <Box 
    // background="blue"
    display="flex" 
    flexDirection="row" 
    alignItems="center"
    justifyContent={["center", "flex-start"]}>  
      <Stack direction={["column", "row"]} spacing={["30px", "40px"]} alignItems="center"> 
        {/* <Box width="100%" marginTop="40px" marginBottom={["20px", "40px"]}> */}
					<GiveButton href={props.buildingProjectGiveUrl} />
				{/* </Box> */}
         {/* PayPal */}
         <PayPal />
        {/* GoFundMe */}
        <GoFundMeLink /> 
       
      </Stack>
     
    </Box>
  )
}

const BuildingProject = (props: any) => {
	// handlers
	const apiProvider = GetApiProvider();
	const buildingProjectGiveUrl = apiProvider.give().getBuildingProjectGiveUrl();

	return (
    <PageLayout>

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

				<ParagraphText marginTop="30px" marginBottom="10px">
					- Your RCCG-HOG Church Family
				</ParagraphText>

				{/* Give CTA  */}
        
				<GivingOptions 
        buildingProjectGiveUrl={buildingProjectGiveUrl}
        /> 
			</Box>

			<Footer />
		</Box>
    </PageLayout>

	);
};

export async function getStaticProps() {

	return {
		props: {},
		revalidate: 1,
	};
}

export default BuildingProject;

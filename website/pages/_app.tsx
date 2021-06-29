import { ChakraProvider, theme } from "@chakra-ui/react";
// import NextHead from "next/head";
import React from "react";

const myTheme = {
	...theme,
	fonts: {
		heading: "Montserrat, sans-serif",
		subheading: "Noto Serif, serif",
		body: "Roboto, sans-serif",
	},
};

function MyApp({ Component, pageProps }) {
	return (
			// {/* <NextHead>
			// 	<link
			// 		rel="stylesheet"
			// 		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
			// 		media="print"
			// 		// @ts-ignore
			// 		onLoad="this.media='all'"
			// 	/>
			// </NextHead> */}
				// <CSSReset />
        <ChakraProvider>
        {/* <ThemeProvider
				// @ts-ignore
				theme={myTheme}
			> */}
          {/* <Box 
            width="100%" 
            height="100vh" 
            display="flex" 
            flexDirection="column"
            background="green" >
            <Navigation />
            <Box width="100%" height="100%" display="flex" flexDirection="row">
         
            </Box>
          </Box> */}

          <Component {...pageProps} /> 

        </ChakraProvider>
	);
}

export default MyApp;

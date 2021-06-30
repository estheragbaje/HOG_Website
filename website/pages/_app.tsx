import { ChakraProvider, theme, ThemeProvider } from "@chakra-ui/react";
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
          <ThemeProvider
                theme={myTheme}>
            <Component {...pageProps} />
          </ThemeProvider> 
        </ChakraProvider>
	);
}

export default MyApp;

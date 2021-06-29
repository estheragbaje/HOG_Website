import { ChakraProvider, CSSReset, theme, ThemeProvider } from "@chakra-ui/react";
import NextHead from "next/head";
import React from "react";
import Navigation from "../components/Navigation";

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
		<>
			<NextHead>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
					media="print"
					// @ts-ignore
					onLoad="this.media='all'"
				/>
			</NextHead>

			<ThemeProvider
				// @ts-ignore
				theme={myTheme}
			>
				<CSSReset />
				<Navigation />
        <ChakraProvider>
				<Component width="100%" margin="auto" {...pageProps} />

        </ChakraProvider>
			</ThemeProvider>
		</>
	);
}

export default MyApp;

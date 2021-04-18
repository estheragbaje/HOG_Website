import React from "react";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import Navigation from "../components/Navigation";
import NextHead from "next/head";

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
					onLoad="this.media='all'"
				/>
			</NextHead>
			<ThemeProvider theme={myTheme}>
				<CSSReset />
				<Navigation />
				<Component width="100%" margin="auto" {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;

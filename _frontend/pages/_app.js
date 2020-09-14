import React from 'react';
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core';
import Navigation from '../components/Navigation';

const myTheme = {
  ...theme,
  fonts: {
    heading: 'Montserrat, sans-serif',
    subheading: 'Noto Serif, serif',
    body: 'Montserrat, sans-serif',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={myTheme}>
      <CSSReset />
      <Navigation />
      <Component width='100%' margin='auto' {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

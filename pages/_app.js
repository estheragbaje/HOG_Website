import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component width="100%" margin="auto" {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

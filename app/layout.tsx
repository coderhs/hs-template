import '@mantine/core/styles.css';

import React from 'react';
import { mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { Box, Container } from '@mantine/core';

export const metadata = {
  title: 'HS Template',
  description: 'Change to app description',
};

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Box style={{ flex: 1 }}>
              <Container size="md">
                <Box p="md">
                 {children}
                </Box>
              </Container>
            </Box>
            <Footer />
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}

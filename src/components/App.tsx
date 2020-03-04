import { Box, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { useState } from 'react';

import Header from './header/Header';
import NavBar, { Page } from './navbar/NavBar';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import GalleryPage from './pages/gallery/GalleryPage';
import HomePage from './pages/home/HomePage';
import ServicesPage from './pages/services/ServicesPage';

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        border: `1px solid ${grey[300]}`,
        boxShadow: 'none'
      }
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
});

function App() {
  const [page, setPage] = useState(Page.HOME);
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column">
        <Header />
        <NavBar defaultPage={Page.HOME} onChange={(page: Page) => setPage(page)} />
        {page === Page.HOME &&
          <HomePage />
        }
        {page === Page.SERVICES &&
          <ServicesPage />
        }
        {page === Page.GALLERY &&
          <GalleryPage />
        }
        {page === Page.ABOUT &&
          <AboutPage />
        }
        {page === Page.CONTACT &&
          <ContactPage />
        }
      </Box>
    </ThemeProvider>
  );
}

export default App;

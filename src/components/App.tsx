import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Box, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';
import React from 'react';

import { PageType } from './constants';
import Footer from './footer/Footer';
import Header from './header/Header';
import NavBar from './navbar/NavBar';
import AboutPage from './pages/about/AboutPage';
import CarePage from './pages/care/CarePage';
import ContactPage from './pages/contact/ContactPage';
import GalleryPage from './pages/gallery/GalleryPage';
import ServicesPage from './pages/services/ServicesPage';

const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        border: `1px solid ${grey[300]}`,
        boxShadow: 'none'
      }
    },
    MuiDrawer: {
      paper: {
        width: '60%'
      }
    }
  },
  palette: {
    primary: {
      light: pink[100],
      main: pink[200],
      dark: pink[500],
      contrastText: '#000'
    },
    secondary: {
      light: grey[100],
      main: grey[200],
      dark: grey[500],
      contrastText: '#000'
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
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box id={PageType.HOME} display="flex" flexDirection="column">
        <Header />
        <NavBar />
        <AboutPage />
        <ServicesPage />
        <CarePage />
        <GalleryPage />
        <ContactPage />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;

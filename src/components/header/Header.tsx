import { Box, createStyles, IconButton, makeStyles } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';

import Logo from './assets/logo.png';

const HEIGHT = '35vh';

const useStyles = makeStyles(
  createStyles({
    root: {
      backgroundImage: `linear-gradient(${grey[50]}, ${pink[50]})`,
      minHeight: HEIGHT,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialMedia: {
      marginTop: '8px',
      display: 'flex',
      flexDirection: 'row'
    },
    logo: {
      maxWidth: '20%',
      maxHeight: HEIGHT
    },
    iconButton: {
      color: grey[800],
      margin: '8px'
    }
  }),
);

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={Logo} alt="Susu Lashes" className={classes.logo} />
      <Box className={classes.socialMedia}>
        <IconButton className={classes.iconButton} aria-label="facebook" size="small" href="https://www.facebook.com/">
          <Facebook fontSize="small" />
        </IconButton>
        <IconButton className={classes.iconButton} aria-label="twitter" size="small" href="https://twitter.com/">
          <Twitter fontSize="small" />
        </IconButton>
        <IconButton className={classes.iconButton} aria-label="instagram" size="small" href="https://www.instagram.com/susu.lashes/">
          <Instagram fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Header;

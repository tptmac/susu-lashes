import { Box, createStyles, IconButton, makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles(
  createStyles({
    root: {
      backgroundColor: grey[800],
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      padding: '8px'
    },
    copyright: {
      color: '#fff'
    },
    socialMedia: {
      display: 'flex',
      flexDirection: 'row'
    },
    iconButton: {
      color: grey[50],
      marginLeft: '8px'
    }
  }),
);

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="body2" className={classes.copyright}>
        Copyright &copy; {(new Date()).getFullYear()} Susu Lashes
      </Typography>
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

export default Footer;

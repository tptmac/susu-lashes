import { Box, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);

function HomePage() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
    </Box>
  );
}

export default HomePage;

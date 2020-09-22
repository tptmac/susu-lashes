import {
  Box,
  Button,
  Container,
  createStyles,
  IconButton,
  List,
  ListItem,
  makeStyles,
  SwipeableDrawer,
  Typography
} from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';
import { Close, Menu } from '@material-ui/icons';
import { map as _map, size as _size } from 'lodash';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { isMobileWindow, PageType } from '../constants';


const HEIGHT = 50;

const useStyles = makeStyles(
  createStyles({
    root: {
      minHeight: `${HEIGHT}px`,
      display: 'flex',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      backgroundColor: grey[800],
      zIndex: 1
    },
    nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'auto',

    },
    divider: {
      color: '#fff',
      margin: '0 4px'
    },
    activeNav: {
      color: pink[200],
      cursor: 'pointer',
      margin: '0 8px'
    },
    inactiveNav: {
      color: '#fff',
      cursor: 'pointer',
      margin: '0 8px',
      '&:hover': {
        color: pink[200]
      }
    },
    mobileNavBar: {
      width: '100%'
    },
    mobileNavButton: {
      color: '#fff',
      justifyContent: 'space-between'
    },
    mobileNavItemButton: {
      borderBottom: `1px dashed ${pink[200]}`
    },
    hidden: {
      visibility: 'hidden'
    },
    fullWidth: {
      width: '100%'
    },
    closeButton: {
      padding: '16px 16px 0'
    }
  }),
);

function NavBar() {
  const classes = useStyles();
  const [isMobile, setIsMobile] = React.useState(isMobileWindow());
  const [active, setActive] = useState(PageType.HOME);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileWindow());
    };
    window.addEventListener('resize', handleResize)
  });
  
  const onNavButtonClick = (type: PageType) => {
    setActive(type);
  }

  let navBar;

  if (isMobile) {
    const toggleDrawer = (toggle: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (event 
        && event.type === 'keydown' 
        && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsDrawerOpen(toggle);
    };
    navBar = (
      <div className={classes.mobileNavBar}>
        <Button 
          className={classes.mobileNavButton} 
          onClick={toggleDrawer(true)}
          size="large" 
          startIcon={<Menu />} 
          endIcon={<Menu className={classes.hidden} />} 
          fullWidth
        >
          Susu Lashes
        </Button>
        <SwipeableDrawer 
          anchor="left" 
          open={isDrawerOpen} 
          onClose={toggleDrawer(false)} 
          onOpen={toggleDrawer(true)}
          transitionDuration={500}
        >
          <Box display='flex' justifyContent='flex-end'>
            <IconButton onClick={toggleDrawer(false)} className={classes.closeButton}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {_map(Object.values(PageType), (type: PageType) => (
              <ListItem key={type}>
                <Link  
                  key={`nav-${type}`} 
                  to={type}
                  offset={-HEIGHT}
                  onClick={() => onNavButtonClick(type)}
                  className={classes.fullWidth}
                  smooth
                >
                  <Typography variant="button" className={classes.mobileNavItemButton}>
                    {type}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </div>
    );
  } else {
    navBar = _map(Object.values(PageType), (type: PageType, index: number) => {
      const elements = [(
        <Link  
          key={`nav-${type}`} 
          className={type === active ? classes.activeNav : classes.inactiveNav}
          to={type}
          offset={-HEIGHT}
          onSetActive={() => onNavButtonClick(type)}
          smooth
          spy
        >
          <Typography variant="button">
            {type}
          </Typography>
        </Link>
      )];
      if (index !== (_size(PageType) - 1)) {
        elements.push(<Divider key={`divider-${type}`} />)
      }
      return elements;
    });
  }

  return (
    <Box className={classes.root}>
      <Box component={Container} className={classes.nav}>
        {navBar}
      </Box>
    </Box>
  );
}

function Divider() {
  const classes = useStyles();
  return <Typography className={classes.divider}>&bull;</Typography>;
}

export default NavBar;

import { Box, Button, Container, createStyles, makeStyles, Typography } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';
import { map as _map, size as _size } from 'lodash';
import React, { useState } from 'react';
import styled from 'styled-components';

const HEIGHT = '50px';

export enum Page {
  HOME = "HOME",
  SERVICES = "SERVICES",
  GALLERY = "GALLERY",
  ABOUT = "ABOUT",
  CONTACT = "CONTACT"
}

interface NavBarProps {
  defaultPage?: Page;
  onChange: (nav: Page) => void;
}

const useStyles = makeStyles(
  createStyles({
    root: {
      minHeight: HEIGHT,
      borderTop: `1px solid ${grey[200]}`,
      borderBottom: `1px solid ${grey[200]}`,
      display: 'flex',
      alignItems: 'center'
    },
    nav: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    divider: {
      color: grey[800],
      margin: '0 4px'
    },
    activeNav: {
      color: pink[200]
    },
    inactiveNav: {
      color: grey[800]
    }
  }),
);

const NavButton = styled(Button)`
  :hover {
    background: none;
    color: ${pink[200]};
  }
`;

function NavBar(props: NavBarProps) {
  const { defaultPage } = props;
  const [active, setActive] = useState(defaultPage || Page.HOME);
  const classes = useStyles();

  const onNavButtonClick = (page: Page) => {
    setActive(page);
    props.onChange(page);
  }

  return (
    <Box className={classes.root}>
      <Box component={Container} className={classes.nav}>
        {_map(Object.values(Page), (page, index) => {
          const elements = [(
            <NavButton 
              key={`nav-${page}`} 
              className={page === active ? classes.activeNav : classes.inactiveNav}
              onClick={(ev) => onNavButtonClick(page)}
            >
              {page}
            </NavButton>
          )];
          if (index !== (_size(Page) - 1)) {
            elements.push(<Divider key={`divider-${page}`} />)
          }
          return elements;
        })}
      </Box>
    </Box>
  );
}

function Divider() {
  const classes = useStyles();
  return <Typography className={classes.divider}>&bull;</Typography>;
}

export default NavBar;

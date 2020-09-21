import { Container, Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import React from 'react';
import styled from 'styled-components';
import { PageType } from '../../constants';

interface PageProps {
  pageType?: PageType;
  children: any;
}

const Root = styled.div`
  :nth-child(2n) {
    background-color: ${pink[50]};
  }
`;

function Page(props: PageProps) {
  return (
    <Root id={props.pageType}>
      <Container style={{ padding: '32px' }}>
        {props.pageType && 
          <Typography variant="h4" align="center" style={{ margin: '0 0 32px' }}>
            {props.pageType}
          </Typography>
        }
        {props.children}
      </Container>
    </Root>
  )
}

export default Page;
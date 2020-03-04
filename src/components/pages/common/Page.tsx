import { Container, Fade } from '@material-ui/core';
import React from 'react';

function Page(props: any) {
  return (
    <Fade in>
      <Container style={{ padding: '32px 0' }}>
        {props.children}
      </Container>
    </Fade>
  )
}

export default Page;
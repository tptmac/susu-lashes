import { Grid } from '@material-ui/core';
import React from 'react';

import Page from '../common/Page';
import EmailForm from './EmailForm';
import InfoSection from './InfoSection';

function ContactPage() {
  return (
    <Page>
      <Grid container direction="row" spacing={4}>
        <Grid item xs={4}>
          <InfoSection />
        </Grid>
        <Grid item xs={8}>
          <EmailForm />
        </Grid>
      </Grid>
    </Page>
  );
}

export default ContactPage;

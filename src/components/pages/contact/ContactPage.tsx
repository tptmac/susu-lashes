import { Grid } from '@material-ui/core';
import React from 'react';

import { PageType } from '../../constants';
import Page from '../common/Page';
import EmailForm from './EmailForm';
import InfoSection from './InfoSection';

function ContactPage() {
  return (
    <Page pageType={PageType.CONTACT}>
      <Grid container direction="row" spacing={4}>
        <Grid item sm={4} xs={12}>
          <InfoSection />
        </Grid>
        <Grid item sm={8} xs={12}>
          <EmailForm />
        </Grid>
      </Grid>
    </Page>
  );
}

export default ContactPage;

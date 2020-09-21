import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import Page from '../common/Page';
import ProfilePic from './assets/profile.jpg';

function AboutPage() {
  return (
    <Page>
      <Grid container direction="row" justify="center" spacing={4}>
        {/* <Grid item sm={2} xs={12}>
          <img src={ProfilePic} width="100%" style={{ borderRadius: '10px' }} />
        </Grid> */}
        <Grid item sm={12} xs={12}>
          <Typography variant="h4" align="center" style={{ margin: '0px 0px 32px' }}>
            **NEW COVID-19 POLICIES**
          </Typography>
          <Typography variant="body1" align="center">
            If you are not feeling well, or exhibiting any symptoms of the flu or have travelled out of province in the last 14 days, please contact me to cancel your appointment. If I feel that you are exhibiting symptoms, I will unfortunately have to decline the appointment.
          </Typography>
          <br />
          <Typography variant="body1" align="center">
            Before entry, you will be asked to sanitize your hands. A mask is to be worn throughout the entire duration of the appointment. If you do not have one, one will be provided to you. No additional guests are allowed at this time.
          </Typography>
          <br />
          <Typography variant="body1" align="center">
            I am cash only at this time! Thank you!
          </Typography>
        </Grid>
      </Grid>
    </Page>
  );
}

export default AboutPage;

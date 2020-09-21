import { Grid, TextField } from '@material-ui/core';
import React from 'react';

import SubmitButton from '../common/SubmitButton';

function EmailForm() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField label="First name" variant="outlined" size="small" fullWidth required />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField label="Last name" variant="outlined" size="small" fullWidth required />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <TextField label="Email address" variant="outlined" size="small" fullWidth required />
      </Grid>
      <Grid item>
        <TextField
          label="Message"
          variant="outlined"
          size="small"
          rows="8"
          multiline
          fullWidth
          required
        />
      </Grid>
      <Grid item style={{ textAlign: 'right' }}>
        <SubmitButton fullWidth />
      </Grid>
    </Grid>
  );
}

export default EmailForm;

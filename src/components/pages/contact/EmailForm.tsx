import { Button, Grid, TextField } from '@material-ui/core';
import { grey, pink } from '@material-ui/core/colors';
import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled(Button)`
  background-color: ${grey[900]};
  color: white;
  :hover {
    background-color: ${pink[200]};
    border-color: ${pink[200]};
  }
`;

function EmailForm() {
  return (
    <Grid container direction="column" spacing={4} style={{ paddingTop: '8px' }}>
      <Grid item>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField variant="outlined" label="First name" fullWidth required />
          </Grid>
          <Grid item xs={6}>
            <TextField variant="outlined" label="Last name" fullWidth required />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <TextField variant="outlined" label="Email address" fullWidth required />
      </Grid>
      <Grid item>
        <TextField
          variant="outlined"
          label="Message"
          rows="8"
          multiline
          fullWidth
          required
        />
      </Grid>
      <Grid item style={{ textAlign: 'right' }}>
        <SubmitButton variant="outlined" fullWidth>Submit</SubmitButton>
      </Grid>
    </Grid>
  );
}

export default EmailForm;

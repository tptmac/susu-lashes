import { createStyles, makeStyles, Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-bottom: 16px;
`;

function InfoSection() {
  return (
    <>
      <Section>
        <Typography variant="h4">Contact</Typography>
      </Section>
      <Section>
        <Typography variant="body1">Book appointment by phone or email.</Typography>
      </Section>
      <Section>
        <Typography variant="body1">Phone: (226) 777-5959</Typography>
        <Typography variant="body1">Email: susulashes@gmail.com</Typography>
      </Section>
      <Section>
        <Typography variant="subtitle2">Hours of operation:</Typography>
        <Typography variant="body2">Monday: 10AM - 6PM</Typography>
        <Typography variant="body2">Tuesday: 10AM - 6PM</Typography>
        <Typography variant="body2">Wednesday: 10AM - 6PM</Typography>
        <Typography variant="body2">Thursday: 10AM - 6PM</Typography>
        <Typography variant="body2">Friday: 10AM - 6PM</Typography>
        <Typography variant="body2">Saturday: 12PM - 5PM</Typography>
        <Typography variant="body2">Sunday: 12PM - 5PM</Typography>
      </Section>
      <Section>
        <Typography variant="body2" style={{ color: pink[400] }}>* Please let us know about cancelling or rescheduling at least 24 hours prior to your appointment.</Typography>
      </Section>
    </>
  );
}

export default InfoSection;

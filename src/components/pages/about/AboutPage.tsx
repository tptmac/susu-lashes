import { Box, Card, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';
import { FavoriteRounded } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

import Page from '../common/Page';
import ProfilePic from './assets/profile.jpg';

const useStyles = makeStyles(
  createStyles({
    root: {
      padding: '16px'
    }
  })
);

const Text = styled(Typography)`
  font-style: italic;
`;

const Heart = styled(FavoriteRounded)`
  color: ${pink[100]};
`;

function AboutPage() {
  const classes = useStyles();
  const HeartDivider = () => (
    <Box display="flex" flexDirection="row" justifyContent="center" padding="16px 0">
      <Heart fontSize="small" />
      <Heart fontSize="small" />
      <Heart fontSize="small" />
    </Box>
  );

  return (
    <Page>
      <Card className={classes.root}>
        <Grid container direction="row" spacing={4}>
          <Grid item xs={9}>
            <Text variant="body1">
              I am a recent graduate with a 2:1 degree in Creative Writing from the University of Surrey seeking an entry-level position in copywriting.
              During my degree, I have developed an excellent eye for detail due to the heavy demands of assignments and research.
              Over the last year, I have also balanced an editing position at Surrey’s media society.
              Here, I devised content ideas and managed a small team of writers.
              This proves that I have potential to excel within a professional writing field.
              I am looking for a challenging, fast-paced environment within media to utilise my creative knowledge and develop my writing skill-set further.
            </Text>
            <HeartDivider />
            <Text variant="body1">
              A highly-skilled mechanical engineer looking to resume a position in industrial construction.
              Extremely knowledgeable with seven years industry experience.
              Possesses a wide skill set, including condition-based maintenance, through working on automated systems on large-scale building projects.
              Looking to re-establish a career in a progressive organisation which requires engineering expertise after a short career break to take care of a new-born.
            </Text>
            <HeartDivider />
            <Text variant="body1">
              I am an ambitious purchasing manager looking to progress into a senior purchasing position within the automotive sector.
              Having developed communication skills when working in managerial positions at large automotive corporations, I’ve nurtured successful working relationships.
              As a result, I possess an advantageous professional network.
              Due to over 12 years of experience within this industry, I am fully equipped with commercial awareness and product knowledge.
              My hopes are to secure a challenging role in a market-leading automotive company where I can bring fresh strategic vision and value to the business.
            </Text>
          </Grid>
          <Grid item xs={3}>
            <img src={ProfilePic} width="100%" style={{ borderRadius: '10px' }} />
          </Grid>
        </Grid>
      </Card>
    </Page>
  );
}

export default AboutPage;

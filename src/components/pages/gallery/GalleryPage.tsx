import { Grid } from '@material-ui/core';
import { map as _map } from 'lodash';
import React from 'react';

import Page from '../common/Page';
import Pic1 from './assets/pic1.jpeg';
import Pic3 from './assets/pic3.jpg';
import Pic4 from './assets/pic4.jpeg';
import Pic5 from './assets/pic5.jpg';
import Pic6 from './assets/pic6.jpg';
import Pic7 from './assets/pic7.png';
import Pic8 from './assets/pic8.jpg';

const IMAGES = [Pic1, Pic8, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8];

function GalleryPage() {
  return (
    <Page>
      <Grid container spacing={3}>
        {_map(IMAGES, (image) => (
          <Grid item xs={3}>
            <img src={image} width="100%" />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

export default GalleryPage;

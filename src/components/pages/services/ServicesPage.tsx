import { Grid } from '@material-ui/core';
import React from 'react';

import Page from '../common/Page';
import ServiceCard from './ServiceCard';

function ServicesPage() {
  return (
    <Page>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <ServiceCard 
            title="Classic"
            description="Consists of one synthetic lash to one natural lash. It enhances your eyelashes in the most suble way."
            priceItems={[
              { name: 'Full Set', price: 100, durationInMinutes: 120 },
              { name: 'Refill', price: 55, durationInMinutes: 90 }
            ]}
          />
        </Grid>
        <Grid item xs={3}>
          <ServiceCard 
            title="Hybrid"
            description="Is a mixed set of Classic and Volumne lashes. Hybrid gives the definition of Classic with the added fullness of Volume."
            priceItems={[
              { name: 'Full Set', price: 120, durationInMinutes: 150 },
              { name: 'Refill', price: 65, durationInMinutes: 120 }
            ]}
          />
        </Grid>
        <Grid item xs={3}>
          <ServiceCard 
            title="Volume"
            description="The fullest set, fans are created using 3-5 syntheic lashes to one natural. It creates a fluffy look with a maximum fullness."
            priceItems={[
              { name: 'Full Set', price: 140, durationInMinutes: 180 },
              { name: 'Refill', price: 75, durationInMinutes: 120 }
            ]}
          />
        </Grid>
        <Grid item xs={3}>
          <ServiceCard 
            title="Removal"
            description="Must have at least 40% lashes to be considered a refill. Less than 40% will result in full price Set."
            priceItems={[
              { name: 'Removal', price: 20, durationInMinutes: 45 }
            ]}
          />
        </Grid>
      </Grid>
    </Page>
  );
}

export default ServicesPage;

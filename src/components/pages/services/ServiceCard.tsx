import { Card, Divider, Typography } from '@material-ui/core';
import { map as _map } from 'lodash';
import React from 'react';
import styled from 'styled-components';

import SubmitButton from '../common/SubmitButton';

interface PriceItem {
  name: string;
  price: number;
  durationInMinutes: number;
}

interface ServiceCardProps {
  title: string;
  description: string;
  priceItems: PriceItem[];
}

const Section = styled.div`
  margin: 16px;
  text-align: center;
`;

function ServiceCard(props: ServiceCardProps) {
  const { title, description, priceItems } = props;

  return (
    <Card>
      <Section>
        <Typography variant="h5">{title}</Typography>
      </Section>
      <Divider />
      <Section>
        <Typography variant="body1">{description}</Typography>
      </Section>
      <Divider />
      <Section>
        {_map(priceItems, (priceItem: PriceItem) => (
          <Typography key={priceItem.name} variant="body1">
            <b>{priceItem.name}:</b> ${priceItem.price} ({priceItem.durationInMinutes} minutes)
          </Typography>
        ))}
      </Section>
      <Divider />
      <Section>
        <SubmitButton text="Book Now" />
      </Section>
    </Card>
  );
}

export default ServiceCard;

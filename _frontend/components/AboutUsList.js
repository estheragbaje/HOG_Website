import { SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import IconCard from './IconCard';
import {
  ChurchIcon,
  ImpactIcon,
  InceptionIcon,
  LocationIcon,
  OutreachIcon,
  StandIcon,
} from './Icons';

const aboutObj = {
  'our-parish': { icon: ChurchIcon, borderColor: '#3498AF' },
  'our-inception': { icon: InceptionIcon, borderColor: '#61817C' },
  'our-location': { icon: LocationIcon, borderColor: '#006FC4' },
  'our-outreach': { icon: OutreachIcon, borderColor: '#28166F' },
  'our-stand': { icon: StandIcon, borderColor: '#649FAC' },
  'our-impact': { icon: ImpactIcon, borderColor: '#00923F' },
};

function AboutUsList({ abouts, ...rest }) {
  return (
    <SimpleGrid columns={[1, 1, 3]} spacing={20} my={12} mx={12} {...rest}>
      {abouts.map((about) => {
        const values = aboutObj[about.Label];
        const Icon = values && values.icon;

        return (
          <IconCard
            icon={
              Icon ? <Icon height='54px' width='54px' margin='auto' /> : null
            }
            key={about.id}
            subheading={about.Title}
            content={about.Description}
            borderColor={values && values.borderColor}
          />
        );
      })}
    </SimpleGrid>
  );
}

export default AboutUsList;

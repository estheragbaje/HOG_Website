import React from 'react';
import { Icon, SimpleGrid } from '@chakra-ui/core';
import IconCard from './IconCard';
import {
  LocationIcon,
  ChurchIcon,
  InceptionIcon,
  ImpactIcon,
  StandIcon,
  OutreachIcon,
} from './Icons';

function AboutUsList({ ...rest }) {
  return (
    <SimpleGrid columns={[1, 1, 3]} spacing={20} my={12} mx={12} {...rest}>
      <IconCard
        icon={<ChurchIcon height="54px" width="54px" margin="auto" />}
        subheading="Our Parish"
        content="RCCG House of Grace is a Parish of the Redeemed Christian Church of God. Pastor Olusegun Olowookere is  the pioneer and senior pastor of the Parish."
        borderColor="#3498AF"
      />
      <IconCard
        icon={<InceptionIcon height="54px" width="54px" margin="auto" />}
        subheading="Our Inception"
        content="RCCG was founded in 1952 and has since grown to about 7,000 branches/parishes worldwide with a total congregational strength of over five million people."
        borderColor="#61817C"
      />
      <IconCard
        icon={<LocationIcon height="54px" width="54px" margin="auto" />}
        subheading="Our Locations"
        content="TPresently, there are established missions in the United States, most African countries, as well as Europe, Asia, the Caribbean, Canada, South America and Australia."
        borderColor="#006FC4"
      />
      <IconCard
        icon={<OutreachIcon height="54px" width="54px" margin="auto" />}
        subheading="Our Outreach"
        content="RCCG is actively involved in establishing schools, rehabilitation centers, food banks, child care and support centers in our local communities."
        borderColor="#28166F"
      />
      <IconCard
        icon={<StandIcon height="54px" width="54px" margin="auto" />}
        subheading="Our Stand"
        content="The Redeemed Christian Church of God is a Bible believing, and God-fearing church, we teach and encourage a life of holiness.  "
        borderColor="#649FAC"
      />
      <IconCard
        icon={<ImpactIcon height="50px" width="50px" margin="auto" />}
        subheading="Our Impact"
        content="House of Grace has an appeal to all types of people, with a determination to teach and impart people to excel in their various stages of secular life and levels of spiritual development. "
        borderColor="#00923F"
      />
    </SimpleGrid>
  );
}

export default AboutUsList;

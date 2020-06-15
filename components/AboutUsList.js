import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const aboutObj = {
  'our-parish': { icon: ChurchIcon, borderColor: '#3498AF' },
};

function AboutUsList({ ...rest }) {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/abouts/')
      .then((res) => {
        setAbouts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <SimpleGrid columns={[1, 1, 3]} spacing={20} my={12} mx={12} {...rest}>
      {abouts.map((about) => {
        const values = aboutObj[about.Label];
        const Icon = values && values.icon;

        return (
          <IconCard
            icon={
              Icon ? <Icon height="54px" width="54px" margin="auto" /> : null
            }
            key={about.id}
            subheading={about.Title}
            content={about.Description}
            borderColor={values && values.borderColor}
          />
        );
      })}
      {/* <IconCard
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
        content="Presently, there are established missions in the United States, most African countries, as well as Europe, Asia, the Caribbean, Canada, South America and Australia."
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
      /> */}
    </SimpleGrid>
  );
}

export default AboutUsList;

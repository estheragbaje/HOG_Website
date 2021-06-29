import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { WeeklyServiceModel } from "../services/providers/api-models";
import IconCard from "./IconCard";
import {
  BibleIcon, ChurchIcon, CupIcon, ImageIcon, SpeakerIcon
} from "./Icons";

const servicesObj = {
	"sunday-service": { icon: ChurchIcon, borderColor: "#61817C" },
	"bible-study": { icon: BibleIcon, borderColor: "#3498AF" },
	"with-jesus": { icon: ImageIcon, borderColor: "#28166F" },
	"holy-communion": { icon: CupIcon, borderColor: "#006FC4" },
	"command-your-day": { icon: SpeakerIcon, borderColor: "#61817C" },
};

interface WeeklyServicesListProps {
	services: WeeklyServiceModel[];
	[prop: string]: any;
}

function WeeklyServicesList({ services, ...rest }: WeeklyServicesListProps) {
	return (
		<SimpleGrid columns={[1, 1, 1, 3]} spacing={10} my={12} {...rest}>
			{services.map((service) => {
				const values = servicesObj[service.Label];
				const Icon = values && values.icon;
				return (
					<IconCard
						icon={
							Icon ? <Icon height="54px" width="54px" margin="auto" /> : null
						}
						key={service.id}
						heading={service.Name}
						subheading={`${service.Weekday} ${service.StartTime} - ${service.StopTime}`}
						content={service.Description}
						borderColor={values && values.borderColor}
					/>
				);
			})}
			{/* {TextImage ? (
        <TextImage
          src="assets/counseling.jpeg"
          alt="join us"
          content="WE WOULD LOVE YOU TO JOIN US"
          backgroundColor="teal.300"
        />
      ) : null} */}
		</SimpleGrid>
	);
}

export default WeeklyServicesList;

import axios from "axios";
import { GetLogger } from "../../utils/log";
import { Environment } from "../../utils/simple_environment";

interface SermonMessageModel {
	id: string;
	Topic: string;
	Preacher: string;
	Video_url: string;
	Date: string;
}

interface WeeklyServiceModel {
	id: string;
	Name: string;
	Description: string;
	Label: string;
	StartTime: string;
	StopTime: string;
	Weekday: string;
}

interface ChurchEventModel {
	id: string;
}

interface ChurchServiceModel {
	id: string;
}

const ForTest_Sermons = [
	{
		Topic: "Identity in Christ",
		Video_url: "https://www.youtube.com/embed/_CdVcZ6JFDs",
		Date: Date.now(),
	},
];

// TODO: Ideally, the Url used should be gotten through the provider.
// So for Test / Production, the only thing that would differ would be the url.
// This url would be read from the environment variable.
// TODO:
// 1. Create a Local server to serve the data needed during the fetch.
// 2. This Url should be read in from the environment variables. During the build,
//    This would be used to replace the url.
// 3.
// const servicesRes = await fetch(
// 	"https://hog-website.herokuapp.com/weekly-services/?_limit=3"
// );
// const eventsRes = await fetch(
// 	"https://hog-website.herokuapp.com/events/?_limit=4&_sort=updated_at:DESC"
// );

// const sermonsRes = await fetch(
// 	"https://hog-website.herokuapp.com/messages/?_limit=4&_sort=updated_at:DESC"
// );
// const servicesRes = await fetch(
// 	"https://hog-website.herokuapp.com/weekly-services/?_limit=3"
// );
// const eventsRes = await fetch(
// 	"https://hog-website.herokuapp.com/events/?_limit=4&_sort=updated_at:DESC"
// );

// const sermonsRes = await fetch(
// 	"https://hog-website.herokuapp.com/messages/?_limit=4&_sort=updated_at:DESC"
// );

const logger = GetLogger(__filename);

class ApiProvider {
	static STATUS_OK: number = 200;

	baseUrl: string;
	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async getSermonMessages(): Promise<SermonMessageModel[]> {
		// const requestInfo =
		let sermons = [
			{
				id: "first",
				Topic: "Identity in Christ",
				Preacher: "Pst Olowokere",
				Video_url: "https://www.youtube.com/embed/_CdVcZ6JFDs",
				Date: "05-12-2021",
			},
		];
		try {
			const response = await axios.get(
				`${this.baseUrl}/messages/?_limit=4&_sort=updated_at:DESC`
			);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseJson = (await response.data) as SermonMessageModel[];
				logger.logInfo("Response Json ", responseJson);
				sermons = responseJson;
			}
		} catch (e) {}

		return sermons;
	}

	async getChurchEvents(): Promise<ChurchEventModel[]> {
		let churchEvents = [];

		try {
			const response = await axios.get(
				`${this.baseUrl}/events/?_limit=4&_sort=updated_at:DESC`
			);

			if (response.status == ApiProvider.STATUS_OK) {
				const responseData = (await response.data) as ChurchEventModel[];
				logger.logInfo("Response Json ", responseData);
				churchEvents = responseData;
			}
		} catch (e) {}

		return churchEvents;
	}

	async getWeeklyServices(): Promise<WeeklyServiceModel[]> {
		let weeklyServices = [];

		try {
			const response = await axios.get(
				`${this.baseUrl}/weekly-services/?_limit=4&_sort=updated_at:DESC`
			);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseData = (await response.data) as WeeklyServiceModel[];
				logger.logInfo("Response Json ", responseData);
				weeklyServices = responseData;
			}
		} catch (e) {}

		return weeklyServices;
	}
}

export const GetApiProvider = (): ApiProvider => {
	return new ApiProvider(Environment.apiBaseUrl());
};

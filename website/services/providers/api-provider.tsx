import axios from "axios";
import { GetLogger } from "../../utils/log";
import { Environment } from "../../utils/simple_environment";
import {
	SermonMessageModel,
	ChurchEventModel,
	WeeklyServiceModel,
} from "./api-models";

const logger = GetLogger(__filename);

interface ApiQueryParameters {
	limit?: number;
	sort?: any;
}

const FormUrlQueryParameters = (param: ApiQueryParameters) => {
	if (!param) {
		return "";
	}
	const res = [];
	if (param.limit) {
		res.push(`_limit:${param.limit}`);
	}
	if (param.sort) {
		res.push(`_sort=${param.sort}`);
	}
	const result = res.join("&");
	return res.length > 0 ? `?${result}` : "";
};

class ApiProvider {
	static STATUS_OK: number = 200;

	baseUrl: string;
	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async getSermonMessages(
		param?: ApiQueryParameters
	): Promise<SermonMessageModel[]> {
		// TODO: remove this once messages api is working.
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
				`${this.baseUrl}/messages/${FormUrlQueryParameters(param)}`
			);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseJson = (await response.data) as SermonMessageModel[];
				logger.logInfo("Response Json ", responseJson);
				sermons = responseJson;
			}
		} catch (e) {}

		return sermons;
	}

	async getChurchEvents(
		param?: ApiQueryParameters
	): Promise<ChurchEventModel[]> {
		let churchEvents = [];

		try {
			const response = await axios.get(
				`${this.baseUrl}/events/${FormUrlQueryParameters(param)}`
			);

			if (response.status == ApiProvider.STATUS_OK) {
				const responseData = (await response.data) as ChurchEventModel[];
				logger.logInfo("Response Json ", responseData);
				churchEvents = responseData;
			}
		} catch (e) {}

		return churchEvents;
	}

	async getWeeklyServices(
		param?: ApiQueryParameters
	): Promise<WeeklyServiceModel[]> {
		let weeklyServices = [];

		try {
			logger.logInfo("Fetching weekly services ");
			const url = `${this.baseUrl}/weekly-services/${FormUrlQueryParameters(
				param
			)}`;
			logger.logInfo("Url ", url);
			const response = await axios.get(
				`${this.baseUrl}/weekly-services/${FormUrlQueryParameters(param)}`
			);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseData = (await response.data) as WeeklyServiceModel[];
				logger.logInfo("Response Json ", responseData);
				weeklyServices = responseData;
			}
		} catch (e) {
			logger.logError("Error Occured", e);
		}

		return weeklyServices;
	}
}

export const GetApiProvider = (): ApiProvider => {
	return new ApiProvider(Environment.apiBaseUrl());
};

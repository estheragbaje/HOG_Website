import axios from "axios";
import { GetLogger } from "../../utils/log";
import { Environment } from "../../utils/simple_environment";
import {
	SermonMessageModel,
	ChurchEventModel,
	WeeklyServiceModel,
	ChurchDepartmentModel,
	AboutModel,
	OurBeliefModel,
} from "./api-models";

const logger = GetLogger(__filename);

interface ApiQueryParameters {
	limit?: number;
	sort?: any;
	start?: any;
}

const FormUrlQueryParameters = (param: ApiQueryParameters) => {
	if (!param) {
		return "";
	}
	const res = [];
	if (param.limit) {
		res.push(`_limit=${param.limit}`);
	}
	if (param.start) {
		res.push(`_start=${param.start}`);
	}
	if (param.sort) {
		res.push(`_sort=${param.sort}`);
	}

	const result = res.join("&");
	return res.length > 0 ? `?${result}` : "";
};

class SermonMessagesApiProvider {
	baseUrl: string;
	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	getUrl(): string {
		return `${this.baseUrl}/messages`;
	}

	async getMessages(param?: ApiQueryParameters): Promise<SermonMessageModel[]> {
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
			const url = `${this.getUrl()}/${FormUrlQueryParameters(param)}`;
			logger.logInfo("url", url);
			const response = await axios.get(url);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseJson = (await response.data) as SermonMessageModel[];
				logger.logInfo("Response Json ", responseJson);
				sermons = responseJson;
			}
		} catch (e) {}

		return sermons;
	}

	async getMessage(messageId: string): Promise<SermonMessageModel> {
		// TODO: remove this once messages api is working.
		let sermon = {
			id: "first",
			Topic: "Identity in Christ",
			Preacher: "Pst Olowokere",
			Video_url: "https://www.youtube.com/embed/_CdVcZ6JFDs",
			Date: "05-12-2021",
		};

		try {
			const response = await axios.get(`${this.getUrl()}/${messageId}`);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseJson = (await response.data) as SermonMessageModel;
				logger.logInfo("Response Json ", responseJson);
				sermon = responseJson;
			}
		} catch (e) {}

		return sermon;
	}

	async getCount(): Promise<number> {
		let count = 0;
		try {
			const response = await axios.get(`${this.getUrl()}/count`);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseData = (await response.data) as number;
				logger.logInfo("Response Json ", responseData);
				count = responseData;
			}
		} catch (e) {}

		return count;
	}
}

class ChurchEventsApiProvider {
	baseUrl: string;
	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	async getEvent(eventId: string): Promise<ChurchEventModel> {
		let event: ChurchEventModel = {
			id: "1",
			Title: "Childrens Sunday",
			Description:
				"This is Childrens Day. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
			Date: "2020-05-26",
			Time: "09:00:00.000",
			Location: "Church Auditorium",
			Link:
				"https://res.cloudinary.com/house-of-grace/image/upload/v1593955457/visitation_ppd2py.jpg",
		};

		try {
			const response = await axios.get(`${this.baseUrl}/events/${eventId}}`);

			if (response.status == ApiProvider.STATUS_OK) {
				const responseData = (await response.data) as ChurchEventModel;
				logger.logInfo("Response Json ", responseData);
				event = responseData;
			}
		} catch (e) {}

		return event;
	}

	async getEvents(param?: ApiQueryParameters): Promise<ChurchEventModel[]> {
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
}

class GiveApiProvider {
	private giveUrl: string;
	private buildingProjectGiveUrl: string;
	constructor(giveUrl: string, buildingProjectGiveUrl: string) {
		this.giveUrl = giveUrl;
		this.buildingProjectGiveUrl = buildingProjectGiveUrl;
	}

	getGivingUrl(): string {
		return this.giveUrl;
	}

	getBuildingProjectGiveUrl(): string {
		return this.buildingProjectGiveUrl;
	}
}

export interface ContactUsFormData {
	name: string;
	email: string;
	message: string;
}

class ContactUsApiProvider {
	private baseUrl: string;
	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	sendContactInformation(request: ContactUsFormData): Promise<boolean> {
		// TODO (tobe): send contactInformation to /api/send-email
		return new Promise(async (resolve, reject) => {
			try {
				logger.logInfo("Sending Information", request);
				const url = `${this.baseUrl}/contactus`;
				logger.logInfo("Url ", url);
				const response = await axios.post(url, request);
				if (response.status == ApiProvider.STATUS_OK) {
					// const responseData = (await response.data) as ChurchDepartmentModel[];
					// logger.logInfo("Response Json ", responseData);
					// departments = responseData;
				}
				logger.logInfo("Email respone ", response.data);
				const data = response.data;
				if (data.status !== "ok") {
					throw new Error("Email not sent");
				}
			} catch (e) {
				logger.logError("Error Occured", e);
				reject(e);
			}
			resolve(true);
		});
	}
}

class ApiProvider {
	static STATUS_OK: number = 200;

	private baseUrl: string;
	private sermonMessageApiProvider: SermonMessagesApiProvider;
	private churchEventsApiProvider: ChurchEventsApiProvider;
	private giveApiProvider: GiveApiProvider;
	private contactUsApiProvider: ContactUsApiProvider;

	constructor(
		baseUrl: string,
		sermonMessageApiProvider: SermonMessagesApiProvider,
		churchEventsApiProvider: ChurchEventsApiProvider,
		giveApiProvider: GiveApiProvider,
		contactUsApiProvider: ContactUsApiProvider
	) {
		this.baseUrl = baseUrl;
		this.sermonMessageApiProvider = sermonMessageApiProvider;
		this.churchEventsApiProvider = churchEventsApiProvider;
		this.giveApiProvider = giveApiProvider;
		this.contactUsApiProvider = contactUsApiProvider;
	}

	contactUs(): ContactUsApiProvider {
		return this.contactUsApiProvider;
	}

	give(): GiveApiProvider {
		return this.giveApiProvider;
	}

	messages(): SermonMessagesApiProvider {
		return this.sermonMessageApiProvider;
	}

	events(): ChurchEventsApiProvider {
		return this.churchEventsApiProvider;
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
			const response = await axios.get(url);
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

	async getDepartments(
		param?: ApiQueryParameters
	): Promise<ChurchDepartmentModel[]> {
		// 'https://hog-website.herokuapp.com/departments/?_limit=3'
		let departments = [];

		try {
			logger.logInfo("Fetching Departments");
			const url = `${this.baseUrl}/departments/${FormUrlQueryParameters(
				param
			)}`;
			logger.logInfo("Url ", url);
			const response = await axios.get(url);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseData = (await response.data) as ChurchDepartmentModel[];
				logger.logInfo("Response Json ", responseData);
				departments = responseData;
			}
		} catch (e) {
			logger.logError("Error Occured", e);
		}

		return departments;
	}

	async getAbouts(): Promise<AboutModel[]> {
		let abouts = [];

		try {
			logger.logInfo("Fetching Abouts");
			const url = `${this.baseUrl}/abouts/`;
			logger.logInfo("Url ", url);
			const response = await axios.get(url);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseData = (await response.data) as AboutModel[];
				logger.logInfo("Response Json ", responseData);
				abouts = responseData;
			}
		} catch (e) {
			logger.logError("Error Occured", e);
		}

		return abouts;
	}

	async getBeliefs(): Promise<OurBeliefModel[]> {
		let beliefs = [];

		try {
			logger.logInfo("Fetching Abouts");
			const url = `${this.baseUrl}/beliefs/`;
			logger.logInfo("Url ", url);
			const response = await axios.get(url);
			if (response.status == ApiProvider.STATUS_OK) {
				const responseData = (await response.data) as OurBeliefModel[];
				logger.logInfo("Response Json ", responseData);
				beliefs = responseData;
			}
		} catch (e) {
			logger.logError("Error Occured", e);
		}

		return beliefs;
	}
}

export const GetApiProvider = (): ApiProvider => {
	const baseUrl = Environment.apiBaseUrl();
	const sermonMessageProvider = new SermonMessagesApiProvider(baseUrl);
	const churchEventsApiProvider = new ChurchEventsApiProvider(baseUrl);
	const contactUsApiProvider = new ContactUsApiProvider(baseUrl);
	const giveApiProvider = new GiveApiProvider(
		"https://tithe.ly/give?c=2129309",
		"https://app.sharefaith.com/app/giving/rccg2306160"
	);
	return new ApiProvider(
		baseUrl,
		sermonMessageProvider,
		churchEventsApiProvider,
		giveApiProvider,
		contactUsApiProvider
	);
};

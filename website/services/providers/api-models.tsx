export interface SermonMessageModel {
	id: string;
	Topic: string;
	Preacher: string;
	Video_url: string;
	Date: string;
}

export interface WeeklyServiceModel {
	id: string;
	Name: string;
	Description: string;
	Label: string;
	StartTime: string;
	StopTime: string;
	Weekday: string;
}

export interface ChurchEventModel {
	id: string;
	Title: string;
	Description: string;
	Date: string;
	Time: string;
	Image?: any;
	Location: string;
	Link: string;
}

export interface ChurchServiceModel {
	id: string;
}

export interface ChurchDepartmentModel {
	id: string;
	Name: string;
	Image?: any;
}

export interface AboutModel {
	id: string;
	Title: string;
	Description: string;
	Label: string;
}

export interface OurBeliefModel {
	id: string;
	Name: string;
	Description: string;
}

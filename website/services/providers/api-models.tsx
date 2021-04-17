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
}

export interface ChurchServiceModel {
	id: string;
}

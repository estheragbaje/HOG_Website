class Logger {
	tag: string;
	constructor(tag: string) {
		this.tag = tag;
	}
	logInfo(key: string, value?: any) {
		console.log(`[${this.tag}:${key}]`, value);
	}
	logError(key: string, value?: any) {
		console.error(`[${this.tag}:${key}]`, value);
	}
}

export const GetLogger = (tag: string) => {
	return new Logger(tag);
};

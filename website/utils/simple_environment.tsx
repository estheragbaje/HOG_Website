export class Environment {
	static isProduction() {
		return process.env.NODE_ENV === "production";
	}

	static apiBaseUrl(): string {
		// TODO: Create Environment variable REACT_APP_API_BASE_URL
		// These Urls should come from environment variables so that at build time
		// they are rendered rather than use if/else logic.
		if (Environment.isProduction()) {
			return "https://hog-website.herokuapp.com";
		}
		return "http://localhost:8000";
	}
}

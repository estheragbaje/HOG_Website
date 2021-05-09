// define a route handler for the default home page
import express from "express";
import { GetLogger } from "./logger";
import { GetWeeklyServices } from "./modules/weekly-services";
import { GetAbouts } from "./modules/abouts";
import { GetBeliefs } from "./modules/beliefs";

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 8000; // default port to listen

const logger = GetLogger("Index");

// define a route handler for the default home page
app.get("/", (req, res) => {
	res.send("Boom Boom!!");
});

// Weekly Services
app.get("/weekly-services", (req, res) => {
	let weeklyservives = GetWeeklyServices();
	const query = req.query;

	if (query && query._limit) {
		const limit: number = parseInt(query._limit.toString(), 10);
		weeklyservives = weeklyservives.slice(0, limit);
	}

	res.send(weeklyservives);
});

// abouts
app.get("/abouts", (req, res) => {
	res.send(GetAbouts());
});

// beliefs
app.get("/beliefs", (req, res) => {
	res.send(GetBeliefs());
});

//
// app.post("/api/sniplighter/submission", async (req, res) => {
// 	// start a pipeline execution
// 	console.log("req ", req.body);
// 	try {
// 		// const response = await axios.post(
// 		// 	`${CODE_MODIFIER_SERVICE_HOST}/codemodifier/v1/submission`,
// 		// 	req.body
// 		// );
// 		// res.send(response.data);
// 	} catch (e) {
// 		logger.logError("Error Occured In Get", e);
// 		res.send({
// 			status: "fail",
// 		});
// 	}
// });

// app.get(`/api/sniplighter/submission/:token`, async (req, res) => {
// 	// start a pipeline execution
// 	try {
// 		// const token = req.params.token;
// 		// const response = await axios.get(
// 		// );
// 		// return res.send(response.data);
// 	} catch (e) {
// 		logger.logError("Error Occured In Get", e);
// 		res.send({
// 			status: "fail",
// 		});
// 	}
// });

// start the Express server
app.listen(port, () => {
	logger.logInfo(`server started at http://localhost:${port}`);
});

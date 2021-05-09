// define a route handler for the default home page
import express from "express";
import { GetLogger } from "./logger";
import axios from "axios";
import { GetWeeklyServices } from "./modules/weekly-services";

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = 8000; // default port to listen

const logger = GetLogger("Index");

// define a route handler for the default home page
app.get("/", (req, res) => {
	res.send("Hello world Yes!");
});

// Weekly Services
app.get("/weekly-services", (req, res) => {
	res.send(GetWeeklyServices());
});

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

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const secret = "silliness";

module.exports = (app) => {
	app.use(cors());

	app.use(bodyParser.json());

	app.use(cookieParser(secret));
};

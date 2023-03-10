const env = process.env.NODE_ENV || "development";

const config = {
	development: {
		port: process.env.PORT || 8090,
		dbURL: "mongodb+srv://<username>:<password>@whatever.nymha.mongodb.net/<database>",
		authCookieName: "x-auth-token",
	},
};

module.exports = config[env];

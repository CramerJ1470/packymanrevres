const router = require("../routes");

module.exports = (app) => {
	app.use("/api/users", router.users);

	app.use("/api/playingboards", router.playingboards);

	app.use("/api/games", router.games);

	app.use("*", (req, res, next) => {
		console.log(req.url);
		res.status(500).json({ error: "Route not matching" });
	});
};

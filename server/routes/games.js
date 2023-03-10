const controllers = require("../controllers/");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.games.get);

router.post("/", auth(), controllers.games.post);

router.put("/:id", auth(), controllers.games.put);

router.delete("/:id", auth(), controllers.games.delete);

module.exports = router;

const controllers = require("../controllers/");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.playingboards.get);

router.post("/post", controllers.playingboards.post);

router.put("/:id", auth(), controllers.playingboards.put);

router.delete("/:id", auth(), controllers.playingboards.delete);

module.exports = router;

const controllers = require("../controllers/");
const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const { signupValidation, loginValidation } = require("../validation");

router.get("/", controllers.users.get);

router.post("/register", signupValidation, controllers.users.post.register);

router.post("/login", loginValidation, controllers.users.post.login);

router.post("/logout", controllers.users.post.logout);

router.put("/:id", controllers.users.put);

router.delete("/:id", controllers.users.delete);

module.exports = router;

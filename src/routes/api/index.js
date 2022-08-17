const { Router } = require("express");

const users = require("./users.js");
const thoughts = require("./thoughts.js");

const router = Router();

router.use("/users", users);
router.use("/thoughts", thoughts);

module.exports = router;

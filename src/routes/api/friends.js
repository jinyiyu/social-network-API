const { Router } = require("express");
const { createFriend, deleteFriend } = require("../../controllers/friend");

const router = Router();

router.post("/friends/:frinedId", createFriend);
router.delete("/friends/:frinedId", deleteFriend);

module.exports = router;

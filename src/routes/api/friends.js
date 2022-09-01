const { Router } = require("express");
const { createFriend, deleteFriend } = require("../../controllers/friend");

const router = Router();

router.post("/friends/:friendId", createFriend);
router.delete("/friends/:friendId", deleteFriend);

module.exports = router;

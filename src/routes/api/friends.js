const { Router } = require("express");
const { createFriend, deleteFriend } = require("../../controllers/friend");

const router = Router();

router.post("/:frinedId", createFriend);
router.delete("/:frinedId", deleteFriend);

module.exports = router;

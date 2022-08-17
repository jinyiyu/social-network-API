const { Router } = require("express");

const {
  getAllThoughts,
  getAllThoughtsById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughts");

const reactions = require("./reactions.js");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:id", getAllThoughtsById);
router.post("/", createThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);
router.use("/:thoughtId", reactions);

module.exports = router;

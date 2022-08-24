const { Thought } = require("../models");

const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    return res.json({ data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Thoughts | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getAllThoughtsById = async (req, res) => {
  try {
    const { id } = req.params;

    const thought = await Thought.findById(id);

    if (!thought) {
      return res
        .status(404)
        .json({ success: false, message: "Thought does not exist" });
    }

    return res.json({ data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought by id | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const createThought = async (req, res) => {
  try {
    const { thoughtText, username, userId } = req.body;

    if (username && thoughtText && userId) {
      await Thought.create({ username, thoughtText, userId });
      return res.json({ success: true });
    } else {
      return res
        .status(404)
        .json({ message: "Please pass in valid information" });
    }
  } catch (error) {
    console.log(`Error: Fail to create Thought | ${error.message}`);
    res.status(500).json({ sucess: false, message: error.message });
  }
};
const updateThought = async (req, res) => {
  try {
    const { id } = req.params;
    const { thoughtText } = req.body;

    const updatedThought = await Thought.findByIdAndUpdate(
      id,
      { thoughtText },
      { new: true }
    );

    if (!updatedThought) {
      res
        .status(404)
        .json({ sucess: false, message: "Cannot Find This Thought" });
    }

    res.json({ sucess: true, data: updatedThought });
  } catch (error) {
    console.log(`Error: Fail to Update Thought | ${error.message}`);
    res.status(500).json({ sucess: false, message: error.message });
  }
};
const deleteThought = async (req, res) => {
  try {
    const { id } = req.params;

    const targetedThought = await Thought.findById(id);
    console.log(targetedThought);

    if (!targetedThought) {
      res
        .status(404)
        .json({ sucess: false, message: "Cannot find this thoguht" });
    }

    await Thought.deleteOne({ id });

    res.json({
      sucess: true,
      message: `Thought successfully deleted`,
    });
  } catch (error) {
    console.log(`Error: Fail to delete Thought | ${error.message}`);
    res.status(500).json({ sucess: false, message: error.message });
  }
};

module.exports = {
  getAllThoughts,
  getAllThoughtsById,
  createThought,
  updateThought,
  deleteThought,
};

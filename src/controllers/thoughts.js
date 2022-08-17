const getAllThoughts = (req, res) => {
  try {
    return res.json("getAllThoughts");
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Thoughts | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getAllThoughtsById = (req, res) => {
  try {
    return res.json("getAllThoughtsById");
  } catch (error) {
    console.log(`[ERROR]: Failed to get Thought | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const createThought = (req, res) => {
  return res.json("createThought");
};
const updateThought = (req, res) => {
  return res.json("updateThought");
};
const deleteThought = (req, res) => {
  return res.json("deleteThought");
};

module.exports = {
  getAllThoughts,
  getAllThoughtsById,
  createThought,
  updateThought,
  deleteThought,
};

const { Thought } = require("../models");

const createReactionForThought = async (req, res) => {
  try {
    const { reactionBody, username } = req.body;
    const reaction = { reactionBody, username };
    const { thoughtId } = req.params;
    if (thoughtId) {
      const data = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $addToSet: { reactions: reaction } },
        { new: true }
      );
      return res.status(200).json({ success: true, data });
    }
  } catch (error) {
    return res.status(500).json(`Falied to create friend | ${error.message}`);
  }
};

const deleteReactionForThought = async (req, res) => {
  // try {
  //   const data = await Thought.findOneAndUpdate(
  //     { _id: id },
  //     { $pull: { friends: friendId } },
  //     { new: true }
  //   );
  //   return res.status(200).json({ success: true, data });
  // } catch (error) {
  //   return res.status(500).json("fail to delete reaction for this thought");
  // }
};

module.exports = {
  createReactionForThought,
  deleteReactionForThought,
};

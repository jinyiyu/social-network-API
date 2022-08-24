const { User } = require("../models");

const createFriend = async (req, res) => {
  try {
    const { id, friendId } = req.body;
    if (id && friendId) {
      await User.findOneAndUpdate(
        { _id: id },
        { $push: { friends: friendId } },
        { new: true }
      );
      return res.status(200).json({ success: true });
    }
  } catch (error) {
    return res.status(500).json(`Falied to create friend | ${error.message}`);
  }
};
const deleteFriend = (req, res) => {
  return res.json("deleteFriend");
};

module.exports = {
  createFriend,
  deleteFriend,
};

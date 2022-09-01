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

const deleteFriend = async (req, res) => {
  // try {
  //   const { userId, friendId } = req.params;
  //   if (userId && friendId) {
  //     await User.findOneAndUpdate(
  //       { _id: userId },
  //       { $pull: { friends: friendId } },
  //       { new: true }
  //     );
  //     return res.status(200).json({ success: true });
  //   }
  // } catch (error) {
  //   return res.status(500).json(`Falied to delete friend | ${error.message}`);
  // }
};

module.exports = {
  createFriend,
  deleteFriend,
};

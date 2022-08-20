const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json({ data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Users | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist" });
    }

    return res.json({ data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get User by id | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const createUser = (req, res) => {
  const { username, email } = req.body;

  if (username && email) {
    User.create({ username, email });
    return res.json({ success: true });
  } else {
    return res
      .status(404)
      .json({ message: "Please pass in valid username or email" });
  }
};

const updateUser = (req, res) => {
  return res.json("updateUser");
};

const deleteUser = (req, res) => {
  return res.json("deleteUser");
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

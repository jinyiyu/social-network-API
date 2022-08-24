const { User } = require("../models");

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
  try {
    const { username, email } = req.body;

    if (username && email) {
      User.create({ username, email });
      return res.json({ success: true });
    } else {
      return res
        .status(404)
        .json({ message: "Please pass in valid username or email" });
    }
  } catch (error) {
    console.log(`Error: Fail to create User | ${error.message}`);
    res.status(500).json({ sucess: false, message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, email },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ sucess: false, message: "Cannot find this user" });
    }

    res.json({ sucess: true, data: updatedUser });
  } catch (error) {
    console.log(`Error: Fail to update User | ${error.message}`);
    res.status(500).json({ sucess: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const targetedUser = await User.findById(id);
    console.log(targetedUser);

    if (!targetedUser) {
      res.status(404).json({ sucess: false, message: "Cannot find this user" });
    }

    await User.deleteOne({ id });

    res.json({
      sucess: true,
      message: `User successfully deleted`,
    });
  } catch (error) {
    console.log(`Error: Fail to delete User | ${error.message}`);
    res.status(500).json({ sucess: false, message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

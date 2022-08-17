const getAllUsers = (req, res) => {
  try {
    return res.json("getAllUsers");
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Users | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const getUserById = (req, res) => {
  try {
    return res.json("getUserById");
  } catch (error) {
    console.log(`[ERROR]: Failed to get User | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const createUser = (req, res) => {
  return res.json("createUser");
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

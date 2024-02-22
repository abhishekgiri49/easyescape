const User = require("../models/User");

// Create a new user
const create = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, username, email, password } =
      req.body;
    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      username,
      email,
      password,
      role: "Admin",
    });
    const savedUser = await newUser.save();
    res.status(201).json({ status: 201, message: "success", data: savedUser });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get all users
const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ status: 200, data: users, message: "success" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Get a specific user by ID
const getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "User not found" });
    res.json({ status: 200, data: user, message: "User details" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Update a user by ID
const updateById = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      username,
      email,
      password,
      role,
    } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, phoneNumber, username, email, password, role },
      { new: true }
    );
    if (!updatedUser)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "User not found" });
    res.json({
      status: 200,
      data: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

// Delete a user by ID
const deleteById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res
        .status(404)
        .json({ status: 404, data: [], message: "User not found" });
    res.json({ status: 200, data: [], message: "User Deleted" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, data: [], message: "Internal Server Error" });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};

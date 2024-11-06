import asyncHandler from "express-async-handler";

// @desc         Auth user/set token
// route         POST /api/users/auth
// @access       Public

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc         Register a new User
// route         POST /api/users/users
// @access       Public

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});
// @desc         Logout User
// route         POST /api/users/logout
// @access       Public

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// @desc         Get user Profile
// route         GET /api/users/profile
// @access       Public

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});
// @desc         Get user Profile
// route         PUT /api/users/profile
// @access       Public

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
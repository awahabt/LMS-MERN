const User = require("../../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { userName, userEmail, password, role } = req.body;

  const existingUser = await User.findOne({
    $or: [{ userName }, { userEmail }],
  });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User name or email already exist",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    userName,
    userEmail,
    password: hashPassword,
    role,
  });

  await newUser.save();

  return res.status(201).json({
    success: true,
    messsasge: "Register Successfull",
  });
};

module.exports = { registerUser };

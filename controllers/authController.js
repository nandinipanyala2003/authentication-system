const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { readUsers, saveUsers } = require("../utils/fileHandler");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const users = readUsers();

    const userExists = users.find(
      (user) => user.email === email
    );

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const newUser = {
      id: Date.now(),
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    saveUsers(users);

    res.status(201).json({
      message: "Registration Successful",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const users = readUsers();

    const user = users.find(
      (u) => u.email === email
    );

    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDashboard = (req, res) => {
  res.status(200).json({
    message: "Welcome To Dashboard",
    user: req.user,
  });
};

module.exports = {
  registerUser,
  loginUser,
  getDashboard,
};
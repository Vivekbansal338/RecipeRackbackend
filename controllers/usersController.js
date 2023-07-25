const users = require("../models/Users");

//controller for fetching all users
exports.getAllUsers = async (req, res) => {
  try {
    const user = await users.find({});
    res.json(user);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

//controller for fetching a single user
exports.getSingleUser = async (req, res) => {
  try {
    const user = await users.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//controller for creating a user
exports.createUser = async (req, res) => {
  try {
    const user = await users.create(req.body);
    if (user) {
      res.status(200).json(user);
    } else {
      res.json({ message: "User already exists" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await users.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      // res.status(200).json(user);
      res.status(200).json({ status: "success", user: user });
    } else {
      res.json({ status: "unsuccess", message: "User does not exist" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

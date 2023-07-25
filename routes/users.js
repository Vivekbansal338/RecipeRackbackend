const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

// API route for fetching all users
// router.get("/", userController.getAllUsers);

// API route for fetching a single user
// router.get("/:id", userController.getSingleUser);

// API route for creating a user/signup
router.post("/signup", userController.createUser);

// API route for logging in a user
router.post("/login", userController.loginUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// Example API route for fetching all recipes
router.get("/recipes", recipeController.getAllRecipes);

module.exports = router;

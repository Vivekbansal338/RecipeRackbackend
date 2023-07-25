const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favoritiesController");

// API route for fetching all favorite recipes
router.get("/:userId", favoritesController.getAllFavorites);

// API route for adding a favorite recipe
router.post("/add", favoritesController.addFavorite);

// API route for removing a favorite recipe
router.post("/remove", favoritesController.removeFavorite);

// API route for checking if a recipe is bookmarked
router.post("/checkBookmark", favoritesController.checkBookmark);

module.exports = router;

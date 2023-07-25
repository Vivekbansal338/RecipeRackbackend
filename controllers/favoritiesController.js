const Favorite = require("../models/Favorite");

// Controller for fetching all favorite recipes
exports.getAllFavorites = async (req, res) => {
  const { userId } = req.params;
  try {
    const favorites = await Favorite.findOne({ userId });
    res.status(200).json({ status: "success", data: favorites });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// Controller for adding a favorite recipe
exports.addFavorite = async (req, res) => {
  const { userId, recipedata } = req.body;
  try {
    const favorite = await Favorite.findOneAndUpdate(
      { userId },
      {
        $inc: { total: 1 },
        $push: { items: recipedata },
      },
      { upsert: true, new: true }
    );
    res.status(201).json({ status: "success", data: favorite });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// Controller for removing a favorite recipe
exports.removeFavorite = async (req, res) => {
  const { userId, uri } = req.body;
  try {
    const favorite = await Favorite.findOneAndUpdate(
      { userId },
      {
        $pull: { items: { uri } },
        $inc: { total: -1 },
      },
      { new: true }
    );
    res.status(200).json({ status: "success", data: favorite });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// Controller for checking if a recipe is bookmarked
exports.checkBookmark = async (req, res) => {
  const { userId, uri } = req.body;
  try {
    const favorite = await Favorite.findOne({ userId });
    const isBookmarked = favorite.items.some((item) => item.uri === uri);
    res.status(200).json({ status: "success", data: isBookmarked });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

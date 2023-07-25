const mongoose = require("mongoose");

const FavoriteRecipeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  items: [],
});

const Favorite = mongoose.model("Favorite", FavoriteRecipeSchema, "favorities");

module.exports = Favorite;

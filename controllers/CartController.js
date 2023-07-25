const Cart = require("../models/Cart");

// Controller for fetching the cart data
exports.getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });
    res.status(200).json({ status: "success", data: cart });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// Controller for adding an item to the cart
exports.addItemToCart = async (req, res) => {
  const { userId, recipedata } = req.body;
  const price = recipedata.image.length;
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      {
        $inc: { total: price, quantity: 1 },
        $push: { items: recipedata },
      },
      { upsert: true, new: true }
    );
    res.status(200).json({ status: "success", data: cart });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// Controller for removing an item from the cart
exports.removeItemFromCart = async (req, res) => {
  const { userId, uri, price } = req.body;
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      {
        $pull: { items: { uri } },
        $inc: { total: -price, quantity: -1 },
      },
      { new: true }
    );
    res.status(200).json({ status: "success", data: cart });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// Controller for clearing the cart
exports.clearCart = async (req, res) => {
  const { userId } = req.body;

  try {
    // Find the cart record for the specified user
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { items: [], total: 0, quantity: 0 },
      { new: true }
    );

    res.status(200).json({ status: "success", data: cart });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// Controller for checking if an item is in the cart
exports.checkCartItem = async (req, res) => {
  const { userId, itemId } = req.body;
  try {
    const cart = await Cart.findOne({ userId });

    const isCartItem = cart.items.some(
      (item) => item._id.toString() === itemId
    );

    res.status(200).json({ status: "success", data: isCartItem });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

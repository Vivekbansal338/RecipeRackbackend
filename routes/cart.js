const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");

// API route for fetching all cart data
router.get("/:userId", CartController.getCart);

// API route for adding a cart item
router.post("/add", CartController.addItemToCart);

// API route for removing a cart item
router.post("/remove", CartController.removeItemFromCart);

// API route for checking if a recipe is in the cart
router.post("/checkcartitem", CartController.checkCartItem);

// API route for clearing the cart
router.post("/clear", CartController.clearCart);

module.exports = router;

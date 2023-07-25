const express = require("express");
const router = express.Router();
const historyController = require("../controllers/OrderHistoryController");

// API route for fetching all order history data
router.get("/:userId", historyController.getOrderHistory);

// API route for adding an order to the order history
router.post("/add", historyController.addItemToHistory);

module.exports = router;

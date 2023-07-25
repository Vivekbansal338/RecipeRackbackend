const express = require("express");
const router = express.Router();
const PurchaseController = require("../controllers/MypurchaseController");

// API route for fetching all order history data
router.get("/:userId", PurchaseController.getPurchasesdata);

// API route for adding an order to the order history
router.post("/add", PurchaseController.addItemToPurchases);

module.exports = router;

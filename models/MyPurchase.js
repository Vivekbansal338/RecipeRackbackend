const mongoose = require("mongoose");

const OrderPurchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  purchases: [],
});

const Purchase = mongoose.model(
  "MyPurchase",
  OrderPurchaseSchema,
  "MyPurchase"
);
module.exports = Purchase;

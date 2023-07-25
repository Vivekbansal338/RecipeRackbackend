const mongoose = require("mongoose");

const OrderHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orders: [],
});

const History = mongoose.model(
  "orderhistory",
  OrderHistorySchema,
  "orderhistory"
);
module.exports = History;

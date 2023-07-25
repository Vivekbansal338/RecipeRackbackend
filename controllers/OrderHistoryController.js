const History = require("../models/History");

// Controller for fetching the order history
exports.getOrderHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    const history = await History.findOne({ userId });
    res.status(200).json({ status: "success", data: history });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// Controller for adding an item to the order history
exports.addItemToHistory = async (req, res) => {
  const { userId, orderdata } = req.body;
  try {
    const history = await History.findOneAndUpdate(
      { userId },
      {
        $push: { orders: orderdata },
      },
      { upsert: true, new: true }
    );
    res.status(200).json({ status: "success", data: history });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

const Purchase = require("../models/MyPurchase");

// Controller for fetching the order history
exports.getPurchasesdata = async (req, res) => {
  const { userId } = req.params;
  try {
    const data = await Purchase.findOne({ userId });
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

// // Controller for adding an item to the order history
// exports.addItemToPurchases = async (req, res) => {
//   const { userId, orderdata } = req.body;
//   try {
//     const data = await Purchase.findOneAndUpdate(
//       { userId },
//       {
//         $push: { purchases: orderdata },
//       },
//       { upsert: true, new: true }
//     );
//     res.status(200).json({ status: "success", data: data });
//   } catch (err) {
//     res.status(500).json({ status: "error", error: err });
//   }
// };

// Controller for adding an item to the order history
exports.addItemToPurchases = async (req, res) => {
  const { userId, orderdata } = req.body;

  try {
    const data = await Purchase.findOneAndUpdate(
      { userId },
      { $push: { purchases: { $each: orderdata } } }, // Use $each to push individual elements of orderdata
      { upsert: true, new: true }
    );
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

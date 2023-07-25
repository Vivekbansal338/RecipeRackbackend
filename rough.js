// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const app = express();

// // Connect to MongoDB Atlas
// mongoose.connect(
//   "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// // Check if MongoDB is connected
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", function () {
//   console.log("MongoDB connected!");
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use("/products", (req, res, next) => {
//   console.log("----- products");
//   res.redirect("/");
//   // next();
// });

// app.use("/", (req, res, next) => {
//   console.log("root");
//   res.send("Hello World!");
// });

// // app.get("/", (req, res) => {
// //   console.log("GET /");
// //   res.send("Hello World!");
// // });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });const express = require('express');

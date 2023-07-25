// app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");
const usersRoutes = require("./routes/users");
const favoritiesRoutes = require("./routes/favorities");
const cartRoutes = require("./routes/cart");
const orderhistoryRoutes = require("./routes/orderhistory");
const purchasesRoutes = require("./routes/mypurchase");

const app = express();

// Configure dotenv
require("dotenv").config();

mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
  });

const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to MongoDB"));

// Middleware
app.use(cors());
// app.use(bodyParser.json());

// Parse incoming request bodies with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers
app.use("/api/v2/users", usersRoutes);
app.use("/api/v2/favorities", favoritiesRoutes);
app.use("/api/v2/cart", cartRoutes);
app.use("/api/v2/orderhistory", orderhistoryRoutes);
app.use("/api/v2/purchases", purchasesRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!ccc");
});

module.exports = app;

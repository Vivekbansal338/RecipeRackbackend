const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true,
//     },
//     dateOfBirth: {
//       type: Date,
//     },
//     gender: {
//       type: String,
//       enum: ["Male", "Female", "Other"],
//     },
//     bio: {
//       type: String,
//     },
//     location: {
//       type: String,
//     },
//     dietaryPreferences: {
//       type: [String],
//     },
//     allergies: {
//       type: [String],
//     },
//     favorites: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Favorite",
//       },
//     ],
//     cart: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "CartItem",
//       },
//     ],
//     orderHistory: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Order",
//       },
//     ],
//     followers: {
//       type: Number,
//       default: 0,
//     },
//     following: {
//       type: Number,
//       default: 0,
//     },
//     socialMediaLinks: {
//       type: {
//         facebook: String,
//         twitter: String,
//         instagram: String,
//       },
//       default: {},
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    bio: {
      type: String,
    },
    location: {
      type: String,
    },
    dietaryPreferences: {
      type: [String],
    },
    allergies: {
      type: [String],
    },
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Favorite",
      },
    ],
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CartItem",
      },
    ],
    orderHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    followers: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
    },
    socialMediaLinks: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;

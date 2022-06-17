/**
 * Hotspot schema
 * @author Yousuf Kalim
 */
const mongoose = require("mongoose");

// Schema
const hotspotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["limited", "unlimited"],
      required: true,
      default: "unlimited",
    },
    bandwidth: {
      type: mongoose.Types.ObjectId,
      ref: "bandwidth",
    },
    time_limit: {
      type: String,
    },
    data_limit: {
      type: String,
    },
    validity: {
      type: String,
      required: true,
    },
    shared_users: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

// Model
module.exports = mongoose.model("hotspots", hotspotSchema);

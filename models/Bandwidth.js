/**
 * bandwidth schema
 * @author Yousuf Kalim
 */
const mongoose = require("mongoose");

// Schema
const bandwidthSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    upload_rate: {
      type: String,
      required: true,
    },
    download_rate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
module.exports = mongoose.model("bandwidth", bandwidthSchema);

/**
 * Router schema
 * @author Yousuf Kalim
 */
const mongoose = require("mongoose");

// Schema
const routerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ip_address: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    port: {
      type: String,
      required: true,
    },
    zone: {
      type: String,
    },
    sub_zone: {
      type: String,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model
module.exports = mongoose.model("routers", routerSchema);

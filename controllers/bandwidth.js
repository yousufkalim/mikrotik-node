// Init
const Bandwidth = require("../models/Bandwidth");

// Get all
exports.getAllBandwidth = async (req, res) => {
  try {
    const bandwidth = await Bandwidth.find();
    res.json({ success: true, bandwidth });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// Get single
exports.getSingleBandwidth = async (req, res) => {
  try {
    const { bandwidthId } = req.params;

    const bandwidth = await Bandwidth.findById(bandwidthId);
    res.json({ success: true, bandwidth });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// create
exports.createBandwidth = async (req, res) => {
  try {
    const bandwidth = await Bandwidth.create(req.body);
    res.json({ success: true, bandwidth });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// update
exports.updateBandwidth = async (req, res) => {
  try {
    const { bandwidthId } = req.params;

    const bandwidth = await Bandwidth.findByIdAndUpdate(bandwidthId, req.body, { new: true });
    res.json({ success: true, bandwidth });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// delete
exports.deleteBandwidth = async (req, res) => {
  try {
    const { bandwidthId } = req.params;

    const bandwidth = await Bandwidth.findByIdAndDelete(bandwidthId);
    res.json({ success: true, bandwidth });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

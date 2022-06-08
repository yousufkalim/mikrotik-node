exports.connection = async (req, res) => {
  try {
    res.json({ success: true });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

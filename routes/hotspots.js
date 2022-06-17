const router = require("express").Router();
const { createHotspot } = require("../controllers/hotspots");

// Hotspot
router.post("/hotspot/:routerId", createHotspot);

module.exports = router;

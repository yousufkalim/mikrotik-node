const router = require("express").Router();
const {
  getAllBandwidth,
  getSingleBandwidth,
  createBandwidth,
  updateBandwidth,
  deleteBandwidth,
} = require("../controllers/bandwidth");

// Bandwidth
router.get("/", getAllBandwidth);
router.get("/:bandwidthId", getSingleBandwidth);
router.post("/", createBandwidth);
router.put("/:bandwidthId", updateBandwidth);
router.delete("/:bandwidthId", deleteBandwidth);

module.exports = router;

const router = require("express").Router();
const { connection } = require("../controllers/mikrotik");

// Admin Register
router.get("/connection", connection);

module.exports = router;

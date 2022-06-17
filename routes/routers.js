const router = require("express").Router();
const { createRouter, getAllRouters, getRouterResource } = require("../controllers/routers");

// Router
router.get("/routers", getAllRouters);
router.post("/routers", createRouter);
router.get("/routers/resource/:routerId", getRouterResource);

module.exports = router;

const router = require("express").Router();
const freeItemsRoutes = require("./freeItems");

// Free item routes
router.use("/freeItems", freeItemsRoutes);

module.exports = router;

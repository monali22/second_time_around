const router = require("express").Router();
const freeItemsRoutes = require("./freeItems");
const stockRoute=require("./stock");


// Free item routes
router.use("/freeItems", freeItemsRoutes);
router.use("/stock",stockRoute);

module.exports = router;

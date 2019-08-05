const router = require("express").Router();
const freeItemsRoutes = require("./freeItems");
const stockDta = require("./stock");

// Free item routes
//router.use("/freeItems", freeItemsRoutes);

router.use("/stocks",stockDta);

module.exports = router;

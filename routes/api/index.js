const router = require("express").Router();
const freeItemsRoutes = require("./freeItems");
const stockRoute=require("./stock");
const userRoute = require('./user');


// Free item routes
router.use("/freeItems", freeItemsRoutes);
router.use("/stock",stockRoute);
router.use("/user",userRoute);

module.exports = router;

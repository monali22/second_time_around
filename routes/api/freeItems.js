const router = require("express").Router();
const freeItemsController = require("../../controllers/freeItemsController");

// Mapping /freeItems/ to "home"
router.route("/")
    .get(freeItemsController.home);


module.exports = router;

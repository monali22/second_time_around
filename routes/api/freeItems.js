const router = require("express").Router();
const freeItemsController = require("../../controllers/freeItemsController");

// Mapping /api/freeItems/ to "home"
router.route("/")
    .get(freeItemsController.home)
    .post(freeItemsController.add);

module.exports = router;

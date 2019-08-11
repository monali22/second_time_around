const router = require("express").Router();
const addressController = require("../../controllers/addressController");

// Matches with "/api/stock"
router.route("/")
  .get(addressController.findAll);
  module.exports = router;
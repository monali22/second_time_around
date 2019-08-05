const router = require("express").Router();
const stockController = require("../../controllers/stockController");

// Matches with "/api/stock"
router.route("/")
  //.get(stockController.findAll)
  .post(stockController.create);

  module.exports = router;


const router = require("express").Router();
const stockController = require("../../controllers/stockController");

// Matches with "/api/stock"
router.route("/")
  .get(stockController.findAll)
  .post(stockController.create);


  // Matches with "/api/stock/:id"
router.route("/:id")
.get(stockController.findById)
.delete(stockController.remove);

  module.exports = router;

  router.route("/:id")
  .post(stockController.update);
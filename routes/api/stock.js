const router = require("express").Router();
const stockController = require("../../controllers/stockController");

// Matches with "/api/stock"
router.route("/")
  .post(stockController.create);

// router
//   .route("/:id")
//   .get(stockController.findById)
//   .put(stockController.update)
//   .delete(stockController.remove);

  module.exports = router;


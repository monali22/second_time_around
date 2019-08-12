const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/stock"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);


  router.route("/")
  .put(userController.update);

  router.route("/:id")
  .get(userController.findId);

  router.route("/findoneuser").get(userController.find);

  module.exports = router;

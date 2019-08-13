const db = require("../models");

// Defining methods for the stock table
module.exports = {

findAll: function(req, res) {
    console.log(req.query);
    console.log("iam here");
    db.StockData
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
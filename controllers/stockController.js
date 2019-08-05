const db = require("../models");

// Defining methods for the stock table
module.exports = {
  
  create: function(req, res) {
    db.StockData.create(req.body)
      .then(Data=> res.json(Data))
      .catch(err => res.status(422).json(err));
  }
}
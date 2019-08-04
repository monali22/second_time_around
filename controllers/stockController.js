const db = require("../models");

// Defining methods for the stock table
module.exports = {
  findAll: function(req, res) {
    console.log(req.query);
    db.StockData.find(req.query)
   
      .then(dbStockData => res.json(dbStockData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.StockData.create(req.body)
      .then(Data=> res.json(Data))
      .catch(err => res.status(422).json(err));
  }
}
const db = require("../models");

// Defining methods for the stock table
module.exports = {
  
  create: function(req, res) {
    db.StockData.create(req.body)
      .then(Data=> res.json(Data))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.StockData
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.StockData
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.StockData
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
const db = require("../models");

// Defining methods for the stock table
module.exports = {
  findAll: function(req, res) {
    //console.log(req.query);
    db.UserData.find(req.query)
   
      .then(dbStockData => res.json(dbStockData))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.UserData.create(req.body)
      .then(Data=> res.json(Data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
        db.UserData
          .findOneAndUpdate({_id: req.params.name},{$push: {post_data:req.body}})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      find: function(req, res) {
        console.log(req.query);
        console.log('inside find one function')
        db.UserData.find(req.query).then(data=> {
          console.log('inside db query')
          console.log(data);
            // console.log("dbModel"+ dbModel);
            res.json(data); 
          }).catch(err => {
            console.log('inside error catch')
            res.status(422).json(err)
          });
      },
      findId: function(req, res) {
        console.log(req.query);
        console.log('inside find one function')
        db.UserData.findById(req.params.id).then(data=> {
          console.log('inside db query')
          console.log(data);
            // console.log("dbModel"+ dbModel);
            res.json(data); 
          }).catch(err => {
            console.log('inside error catch')
            res.status(422).json(err)
          });
      }
//   },
//   update: function(req, res) {
//     db.StockData
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.StockData
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
}
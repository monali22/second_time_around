// const db = require("../models");

// Defining methods for the freeItemsController.
module.exports = {
  home: function(req, res) {
    res.json({ test: "Hello!"});
  },

  //See stock controller to save it to database
  add: function(req, res) {
    console.log("Adding an item!");
    console.log(req.body);
    res.json({ test: "Saved correctly!"});
  }
};


// module.exports = {
  
//   create: function(req, res) {
//     db.StockData.create(req.body)
//       .then(Data=> res.json(Data))
//       .catch(err => res.status(422).json(err));
//   }
// }

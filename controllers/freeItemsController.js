// const db = require("../models");

// Defining methods for the freeItemsController.


const Nexmo=require("nexmo");
  
const nexmo=new Nexmo({
  apiKey:'d07933a5',
 apiSecret:'nCo581EeuIIvM46r',
},{debug:true})


module.exports = {
  home: function(req, res) {
    res.json({ test: "Hello!"});
  },

  //See stock controller to save it to database
  add: function(req, res) {
    console.log("Adding an item!");
    console.log(req.body);
    res.json({ test: "Saved correctly!"});
  },
  email: function(req, res) {
    const number=req.body.number;
    const message=req.body.message;
    
    nexmo.message.sendSms('18163369909', number,message,{type:'unicode'},(err,response)=>{
    
      if(err)
      {
        console.log(err);
      }
     else{
       console.log(response);
     }

    })
    
   // res.json({ test: "email send correctly!test2"});
  
}
}

// module.exports = {
  
//   create: function(req, res) {
//     db.StockData.create(req.body)
//       .then(Data=> res.json(Data))
//       .catch(err => res.status(422).json(err));
//   }
// }

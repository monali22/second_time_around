var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var StockSchema = new Schema({

    itemName:{
        type: String,
        required: true
    },
    
    Item_id:{
        type:Number
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number
    },
    claimed:{
        type:Boolean,
        default:false
    },
    url:{
        type:String,
        default:"img/hj"

    },
    date: { type: Date, default: Date.now() },
    Address:{type:String},
    expireAt: {
        type: Date,
         default: Date.now(),
          index: { expires: '7200m' },
       },
    user_id: {
        type:String,
        required:true
    }
    

});

var StockData = mongoose.model("StockData", StockSchema);

module.exports = StockData;
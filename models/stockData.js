var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var StockSchema = new Schema({

    itemName:{
        type: String,
        required: true
    },
    
    user_id:{
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
        type:String
    }

});

var StockData = mongoose.model("StockData", StockSchema);

module.exports = StockData;
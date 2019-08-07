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
        type:String,
<<<<<<< HEAD
        default:"img/hj"

    },
    date: { type: Date, default: Date.now }
=======
        default: "img/hj"
    }
    // },
    // quantity:{
    //     type:Number
    // },
    // claimed:{
    //     type:Boolean
    // },
    // url:{
    //     type:String
    // }
>>>>>>> c07fce69fb153758f5f5efea93e6f0b25fb166c3

});

var StockData = mongoose.model("StockData", StockSchema);

module.exports = StockData;
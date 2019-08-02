var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserDataSchema=new Schema({
    name:{
            type:String,
            required: true,
        },
    email:
         {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
    image:{
        type:String

    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        min:6,
        max:15
    },
    post_things:{
        type:[Schema.Types.ObjectId],
        ref:"StockData"
    },
    collect_things:{
        type:[Schema.Types.ObjectId],
        ref:"StockData"
    }

})
 var UserData=mongoose.model("UserData",UserDataSchema);
 module.exports=UserData;
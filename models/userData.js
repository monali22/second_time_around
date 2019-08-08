var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserDataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        trim: true,
        lowercase: true,
        //unique: true,
        required: 'Email address is required',
    },
    picture: {
        type: String
    }

})
var UserData = mongoose.model("UserData", UserDataSchema);
module.exports = UserData;
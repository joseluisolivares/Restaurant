const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name:String,
    password:String
},{
    versionKey:false
});


module.exports = mongoose.model("manage", adminSchema);






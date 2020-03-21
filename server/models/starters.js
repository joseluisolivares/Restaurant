const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const startersSchema = new Schema({
    name:String,
    price:String
},{
    versionKey:false
});


module.exports = mongoose.model("starters", startersSchema);






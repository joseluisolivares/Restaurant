const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const startersSchema = new Schema({
    name:String,
    price:String,
    image:String
},{
    versionKey:false
});


module.exports = mongoose.model("starters", startersSchema);






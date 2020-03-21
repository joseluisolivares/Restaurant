const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinksSchema = new Schema({
    name:String,
    price:String
},{
    versionKey:false
});


module.exports = mongoose.model("drinks", drinksSchema);






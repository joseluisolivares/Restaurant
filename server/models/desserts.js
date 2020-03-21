const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dessertsSchema = new Schema({
    name:String,
    price:String
},{
    versionKey:false
});


module.exports = mongoose.model("desserts", dessertsSchema);






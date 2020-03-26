const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dessertsSchema = new Schema({
    name:String,
    price:String,
    image:String
},{
    versionKey:false
});


module.exports = mongoose.model("desserts", dessertsSchema);






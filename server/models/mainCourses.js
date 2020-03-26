const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mainCoursesSchema = new Schema({
    name:String,
    price:String,
    image:String
},{
    versionKey:false
});


module.exports = mongoose.model("maincourses", mainCoursesSchema);






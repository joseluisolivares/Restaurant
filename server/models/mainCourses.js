const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mainCoursesSchema = new Schema({
    name:String,
    price:String
},{
    versionKey:false
});


module.exports = mongoose.model("maincourses", mainCoursesSchema);






const mongoose = require('mongoose');
const restaurant = 'mongodb://localhost/restaurant';

const dbConnect = () => {
  mongoose.connect(`${restaurant}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err,res) => {
    err ? console.log('ERROR someting is wrong!') : console.log(`bbdd conectada correctamente`);
  });
}


  module.exports = {
    dbConnect:dbConnect 
  }
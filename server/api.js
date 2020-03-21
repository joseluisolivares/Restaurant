const { appInitConfig } = require('./config/apiConfig');
const app = appInitConfig();
const Starters = require('./models/starters');
const MainCourses = require('./models/mainCourses');
const Desserts = require('./models/desserts');
const Drinks = require('./models/drinks');
const Admin = require('./models/admin');
const {dbConnect} = require ('./config/dbConfig');
dbConnect();


let item= '';
const callToDataBase = (req) => {
  req.params.key === 'desserts' ? item=Desserts : console.log(req.originalUrl);
  req.params.key === 'maincourses' ? item=MainCourses : console.log(req.originalUrl);
  req.params.key === 'drinks' ? item=Drinks : console.log(req.originalUrl);
  req.params.key === 'starters' ? item=Starters : console.log(req.originalUrl);
  req.params.key === 'admin' ? item=Admin : console.log(req.originalUrl);
  return item;
}

//Get
app.get('/api/:key', function (req, res) {
  callToDataBase(req);
  item.find((err, data) => {
    if (err) {
      console.log('ERROR someting is wrong!')
    } else {
      res.status(200).send({
        succes: 'true',
        message: 'GET',
        item: data
      });
    }
  });
});

//Get One
app.get('/api/:key/:id', function (req, res) {
  callToDataBase(req);
  item.findById( (req.params.id),(err, data) => {
      if(err){
        console.log('ERROR someting is wrong!')
      }else{
        res.status(200).send({
          succes: 'true',
          message: 'GET',
          item: data
        });
      }
  });
});

//Delete
app.delete('/api/:key/:id',  (req, res) => {
  callToDataBase(req);
  item.findByIdAndDelete(req.params.id, (err, data) =>{
    if(err){
      console.log(err);
    }else{
      res.status(200).send({
        succes:"true",
        message: 'DELETE',
        item: data
      })
    }
  });
});

//Post
app.post('/api/:key', function (req, res) {
  callToDataBase(req);
  const {name, price,password} = req.body;
  item = new item({
    name: name,
    price: price,
    password: password
  });
  item.save( (err, data) => {
      if(err){
        console.log('ERROR someting is wrong!')
      }else{
        res.status(201).send({
          succes: 'true',
          message: 'POST',
          Item:data
        });
      }
  });
});

//Put
app.put('/api/:key/:id',  (req, res) => {
  callToDataBase(req);
  item.findById( (req.params.id),(err, data) => {
    if(err){
      console.log('ERROR someting is wrongg!');
      console.log(err);
    }else{
      const {name, price, password} = req.body;
      data.name = name ? name : data.name;
      data.price = price ? price : data.price;
      data.password = password ? password : data.password;
      data.save( (err) => {
        if(err){
          console.log('ERROR someting is wrongg!')
        }else{
          res.status(201).send({
            succes: 'true',
            message: 'PUT',
            newItem: data
          });
        }
      });
    }
  });
});



const PORT = 4000;
app.listen(PORT, function () {
    console.log(`API Restaurant corriendo en puerto ${PORT}`);
});
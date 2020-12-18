const express= require('express');
const bodyParser = require('body-parser');
const app = express();

const connection = require('./app/Models/database');

// require the routes
const user = require("./app/routes/user");

// define the user router
app.use("/users",user);

//const cors = require('cors');

// set the port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



app.use(function (error, req, res, next) {
  if(error instanceof SyntaxError){ //Handle SyntaxError here.
    return res.status(500).send({data : "Invalid data"});
  } else {
    next();
  }
});


app.get('/',function(req,res){
    res.send('Home Page')
});



app.listen(port , ()=>{ console.log(`Server is Running in port:http://localhost:${port}`)})

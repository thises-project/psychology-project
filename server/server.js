const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const connection = require('./app/Models/database');

// require user the route
const user = require("./app/routes/user");

// require the doctor route
const doctor = require("./app/routes/doctor");

// require the question route
const questions = require("./app/routes/questions.js");
app.use(cors())
// set the port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// define the user router
app.use("/users", user);
app.use("/doctor" ,doctor)
// define the question router
app.use("/questions", questions);
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
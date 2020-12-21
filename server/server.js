<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const connection = require("./app/Models/database");

// require the user routes
=======
const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const connection = require('./app/Models/database');
// require user the route
>>>>>>> 134d3b39403944db8d60e80ec6ee71600978b3ed
const user = require("./app/routes/user");
// require the doctor route
const doctor = require("./app/routes/doctor");

<<<<<<< HEAD
// define the user router
app.use("/users", user);

// define the user router
app.use("/doctor", doctor);

const cors = require("cors");
=======
// require the question route
const questions = require("./app/routes/questions.js");
>>>>>>> 134d3b39403944db8d60e80ec6ee71600978b3ed

app.use(cors())
// set the port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/json
app.use(bodyParser.json());
<<<<<<< HEAD
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

=======
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// define the user router
app.use("/users", user);
app.use("/doctor" ,doctor)
app.use("/questions" ,questions)
>>>>>>> 134d3b39403944db8d60e80ec6ee71600978b3ed
app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    //Handle SyntaxError here.
    return res.status(500).send({ data: "Invalid data" });
  } else {
    next();
  }
});
<<<<<<< HEAD

app.get("/", function (req, res) {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Server is Running in port:http://localhost:${port}`);
});
=======
app.get('/',function(req,res){
    res.send('Home Page')
});
app.listen(port , ()=>{ console.log(`Server is Running in port:http://localhost:${port}`)})

>>>>>>> 134d3b39403944db8d60e80ec6ee71600978b3ed

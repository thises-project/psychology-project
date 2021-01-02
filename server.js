const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const app = express();

// const connection = require("./app/Models/database");

// require user the route
const user = require("./app/routes/user");
// require the doctor route
const doctor = require("./app/routes/doctor");

// require the question route
const questions = require("./app/routes/questions.js");

app.use(cors());
// set the port
const PORT = process.env.PORT || 5000;
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// define the user router
app.use("/users", user);
app.use("/doctor", doctor);
app.use("/questions", questions);


app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    //Handle SyntaxError here.
    return res.status(500).send({ data: "Invalid data" });
  } else {
    next();
  }
});

//for the deployment

// if (process.env.NODE_ENV==="production"){
//   app.use(express.static('client/build'))
//   const path = require('path')
//   app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//   })
// }

app.use(express.static('client/build'))

if(process.env.NODE_ENV === 'production'){
  const path  =  require('path');
  app.get('/*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
app.get('/test',(req,res)=>{
  res.send("testt !! ")
})


var server = app.listen();
server.setTimeout(500000);


app.listen(PORT, () => {
  console.log(`Server is Running on port:${PORT}`);
});


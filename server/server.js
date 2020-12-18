const express= require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes');
const con = require('./database');
// const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

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



app.listen(port , ()=>{ console.log(`ServerisRunning in port:http://localhost:${port}`)})

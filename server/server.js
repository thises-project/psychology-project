const express= require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('Home Page')
});

app.get('/',function(req,res){
    res.send('Home Page')
});


app.listen(port , ()=>{ console.log(`ServerisRunning in port:http://localhost:${port}`)})

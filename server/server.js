const express= require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('Home Page')
});

app.listen(port , ()=>{ console.log(`Server is Running in port:http://localhost:${port}`)})
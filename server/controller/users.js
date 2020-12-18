const usersModel = require ('../Models/users');
const db = require('../database');
const users = require('../Models/users');

module.exports ={
    // call back function 
    createUser:(req , res)=>{
    var params =[req.body.userName , req.body.age , req.body.gender , req.body.email , req.body.password];
    console.log(req.body.userName,"create")
    usersModel.createUser(params,function(err , results){
        if(err){console.log("you are have an error in controller" , err)
        res.json(results);
    }
    })
  }
}


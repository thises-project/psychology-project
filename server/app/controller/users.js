const usersModel = require ('../Models/users');
const db = require("../Models/database");




// call back function 
module.exports =  {


  getAllUsers:(req,res) =>{ 
    usersModel.getAllUsers(function(err,results){
       
       if (err) { console.log('error in users controller',err)}
       res.json(results);
   
    })
   },
   

  createUser :  (req , res)=>{
    console.log("hiiiiiiiiiiiiii")
    //console.log(req.body.userName);
     var params =[req.body.userName , req.body.age , req.body.gender , req.body.email , req.body.password];
      console.log(params);
   // console.log(req.body.userName,"create")
    usersModel.createUser(params,function(err , results){
        if(err){console.log("you are have an error in controller" , err)
        res.json(results);
        res.sendStatus(200)
    }
    })
  },

  getOneUser : function(req, res) {
    var params = [req.params.id];
    usersModel.getOneUser(params, function(err, result){
      if(err){
        console.log(err)
      } res.send(result)
      
    })
  },

  updateUser : (req , res)=>{
    var params =[req.body.userName , req.body.age , req.body.gender , req.body.email , req.body.password , req.params.id];
    usersModel.updateUser(params , function(err , results){
      if(err){console.log("you are have an error in controller" , err)}
      res.sendStatus(200)
    })
  },

  deleteUser:(req,res)=>{
    var params = [req.params.id];
    usersModel.deleteUser(params,function(err,result){
      if(err){console.log(`you have an error in doctor controller ${err}`)};
      res.sendStatus(200)
    })
  }

}


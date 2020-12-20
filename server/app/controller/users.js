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
     var params =[req.body.userName , req.body.age , req.body.gender , req.body.email , req.body.password];

    console.log(req.body.userName,"create")
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
      
    });
  }

}

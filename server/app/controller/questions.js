const questionsModel = require ('../Models/question');
const db = require("../Models/database");

// const createQuestions = require('../Models/question');
// const router = express.Router();

// call back function 
module.exports =  {

    createQuestions :  (req , res)=>{
       var params =[req.body.question , req.body.user_Id ];
  
      console.log(req.body.question,"create")
      questionsModel.createQuestions(params,function(err , results){
          if(err){console.log("you are have an error in controller" , err)
          res.json(results);
          res.sendStatus(200)
      }
      })
    }

  
  }
  
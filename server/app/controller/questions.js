const questionsModel = require ('../Models/question');
const db = require("../Models/database");

// const createQuestions = require('../Models/question');
// const router = express.Router();

// Create Question 
module.exports =  {

    createQuestions :  (req , res) => {
       var params =[req.body.question ];
  
      console.log(req.body.question,"createQuestion")
      questionsModel.createQuestions(params,function(err , results){
          if(err){console.log("you are have an error in questions controller" , err)}
          res.json(results);
          res.sendStatus(200)
      
      })
    },

    getAllQuestions : (req, res) => {
      questionsModel.getAllQuestions(function(err, results){
        if(err){
          console.log("you are have an error in questions controller", err)
        }
        res.json(results);
      })
    }
  }
  
const questionsModel = require ('../Models/question');
const db = require("../Models/database");



module.exports =  {

// Create Question 
    createQuestions :  (req , res) => {
       var params =[req.body.question ];
  
      console.log(req.body.question,"createQuestion")
      questionsModel.createQuestions(params,function(err , results){
          if(err){console.log("you are have an error in questions controller" , err)}
          res.json(results);
          res.sendStatus(200)
      
      })
    },

    getAllQuestionsAndAnswers:(req , res)=>{
      questionsModel.getAllQuestionsAndAnswers(function(err,results){
          if(err){console.log("you are have an error in your question controller",err)}
          res.json(results)
          
      })
    },
  
// Get All queations
    getAllQuestions : (req, res) => {
      questionsModel.getAllQuestions(function(err, results){
        if(err){
          console.log("you are have an error in questions controller", err)
        }
        res.json(results);
      })
    },
    getAllQuestionsAndAnswersForOneUser:(req,res)=>{
      var params = [req.params.id]
      questionsModel.getAllQuestionsAndAnswersForOneUser(params ,function(err , results){
        if(err){
          console.log("you are have an error in questions controller", err)
        }
        res.json(results);
      })
    }
  }
  
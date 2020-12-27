const questionsModel = require('../Models/question');
const db = require("../Models/database");

module.exports =  {

// Create Question 
    createQuestions :  (req , res) => {
       var params =[req.body.question , req.body.user_Id];
  
      console.log(req.body.question,"createQuestion")
      questionsModel.createQuestions(params,function(err , results){
          if(err){console.log("you are have an error in questions controller" , err)}
          res.json(results);
          // res.sendStatus(200)
      
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
    },
      // Create Answer ..  
  createAnswer: (req, res) => {
    var params = [req.body.answer, req.body.questionId];

    console.log(req.body.answer, req.body.questionId, "createAnswer")
    questionsModel.createAnswer(params, function (err, results) {
      if (err) { console.log("you are have an error in questions controller in createAnswer", err) }
      res.json(results);
      res.sendStatus(200)

    })

  }
}
  

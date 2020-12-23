const questionsModel = require('../Models/question');
const db = require("../Models/database");



module.exports = {

  // Create Question ..
  createQuestions: (req, res) => {
    var params = [req.body.question];

    console.log(req.body.question, "createQuestion")
    questionsModel.createQuestions(params, function (err, results) {
      if (err) { console.log("you are have an error in questions controller in createQuestions", err) }
      res.json(results);
      res.sendStatus(200)

    })
  },

  // Get All queations ..
  getAllQuestions: (req, res) => {
    questionsModel.getAllQuestions(function (err, results) {
      if (err) {
        console.log("you are have an error in questions controller in getAllQuestions", err)
      }
      res.json(results);
    })
  },



  // Create Answer ..  
  createAnswer: (req, res) => {
    var params = [req.body.answer, req.body.doctor_Id, req.body.question_Id];

    console.log(req.body.answer, req.body.doctor_Id, req.body.question_Id, "createAnswer")
    questionsModel.createAnswer(params, function (err, results) {
      if (err) { console.log("you are have an error in questions controller in createAnswer", err) }
      res.json(results);
      res.sendStatus(200)

    })
  }
}
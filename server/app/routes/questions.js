
const express = require('express')
const router = require('express').Router();

const controller = require("../controller");

// Add Question
router.post('/createQuestion', controller.questions.createQuestions);

// Get All Question 
router.get('/getAllQuestions', controller.questions.getAllQuestions);

// Create Answer 
router.post('/createAnswer', controller.questions.createAnswer);

// export the router folder 
module.exports = router;
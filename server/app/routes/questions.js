
const express = require('express')
const router = require('express').Router();

const controller= require("../controller");

router.post('/createQuestion',controller.questions.createQuestions);
router.get('/getAllQuestions',controller.questions.getAllQuestions);



// export the router folder 
module.exports = router;
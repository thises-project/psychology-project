const express = require('express')
const router = require('express').Router();

const doctorsController= require("../controller/doctors");

router.get('/getAllDoctors',doctorsController.getAllDoctors);
router.get('/getOneDoctor/:id',doctorsController.getOneDoctor);
router.post('/updateDoctor/:id',doctorsController.updateDoctor);
router.delete('/deleteDoctor/:id',doctorsController.deleteDoctor);
// Create Answer 
router.post('/createAnswer', controller.questions.createAnswer);

module.exports = router
const express= require('express');
const router = require('express').Router();
const appointmentController = require('../controller/appointment');
const { route } = require('./schedule');
router.post('/createAppointment' , appointmentController.createAppointment)
router.get('/getAppointmentForDoctor/:id',appointmentController.getAppointmentForDoctor)
router.get('/getAppointmentForOneUser/:id' , appointmentController.getAppointmentForOneUser);

module.exports = router;
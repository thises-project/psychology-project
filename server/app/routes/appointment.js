const express= require('express');
const router = require('express').Router();
const appointmentController = require('../controller/appointment');

router.post('/createAppointment/:id/:userId' , appointmentController.createAppointment)
router.get('/getAppointmentForDoctor/:id',appointmentController.getAppointmentForDoctor)
router.get('/getAppointmentForOneUser/:id' , appointmentController.getAppointmentForOneUser);

module.exports = router;
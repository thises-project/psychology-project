const express = require('express')
const router = require('express').Router();
const controller = require("../controller/schedule");

router.post('/createSchedule' , controller.createSchedule);
router.get('/getScheduleForUser' , controller.getScheduleForUser);
router.get('/getScheduleForDoctor' , controller.getScheduleForDoctor);




// export the router folder 
module.exports = router;
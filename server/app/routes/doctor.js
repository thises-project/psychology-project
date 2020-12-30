const express = require("express");
const router = require("express").Router();

const doctorsController = require("../controller/doctors");

router.post('/authDoc',doctorsController.AuthDoctor);
router.post('/verifyDoc',doctorsController.verifyDoctor);
router.get("/getAllDoctors", doctorsController.getAllDoctors);
router.get("/getOneDoctor/:id", doctorsController.getOneDoctor);
router.put("/postOneDoctorImage/:id", doctorsController.postOneDoctorImage);
router.put("/updateDoctor/:id", doctorsController.updateDoctor);
router.delete("/deleteDoctor/:id",doctorsController.deleteDoctor);

module.exports = router;

const express = require("express");
const router = require("express").Router();

const doctorsController = require("../controller/doctors");

router.get("/getAllDoctors", doctorsController.getAllDoctors);
router.get("/getOneDoctor/:id", doctorsController.getOneDoctor);
router.put("/updateDoctor/:id", doctorsController.updateDoctor);
router.delete("/deleteDoctor/:id", doctorsController.deleteDoctor);

module.exports = router;

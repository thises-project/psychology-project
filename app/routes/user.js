const express = require('express')
const router = require('express').Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const controller= require("../controller");

// users table routes
router.post('/createUser',controller.users.createUser);
router.post('/authUser',controller.users.Auth);
router.post('/verifyUser',controller.users.verifyUser);
router.get('/getAllUsers', controller.users.getAllUsers);
router.get('/getOneUser/:id', controller.users.getOneUser);
router.delete('/deleteUser/:id' , controller.users.deleteUser)
router.patch('/updateUser/:id' , controller.users.updateUser)






// export the router folder 
module.exports = router;
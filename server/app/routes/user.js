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
router.post('/updateUser/:id' , controller.users.updateUser)
router.delete('/deleteUser/:id' , controller.users.deleteUser)





// export the router folder 
module.exports = router;
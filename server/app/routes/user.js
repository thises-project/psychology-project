const express = require('express')
const router = require('express').Router();

const controller= require("../controller");

// users table routes
router.post('/createUser',controller.users.createUser);
router.get('/getAllUsers', controller.users.getAllUsers);




// export the router folder 
module.exports = router;
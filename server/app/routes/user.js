const express = require('express')
const router = require('express').Router();

const controller= require("../controller");

// users table routes
router.post('/createUser',controller.users.createUser);
router.get('/getAllUsers', controller.users.getAllUsers);
router.get('/getOneUser/:id', controller.users.getOneUser);
router.post('/updateUser/:id' , controller.users.updateUser)
router.delete('/deleteUser/:id' , controller.users.deleteUser)




// export the router folder 
module.exports = router;
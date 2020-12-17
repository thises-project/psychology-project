const controller= require('./controller');
const router = require('express').Router();

// users table routes
router.post('/createUser',controller.users.createUser);




// export the router folder 
module.exports.router = router;
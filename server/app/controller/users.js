const usersModel = require ('../Models/users');
const db = require("../Models/database");



// call back function 
module.exports =  {


  getAllUsers:(req,res) =>{ 
    usersModel.getAllUsers(function(err,results){
       
       if (err) { console.log('error in users controller',err)}
       res.json(results);
   
    })
   },
   

  createUser :  (req , res)=>{
    console.log("hiiiiiiiiiiiiii")
    //console.log(req.body.userName);
     var params =[req.body.userName , req.body.age , req.body.gender , req.body.email , req.body.password];
      console.log(params);
   // console.log(req.body.userName,"create")
    usersModel.createUser(params,function(err , results){
        if(err)console.log("you are have an error in controller" , err)
        res.sendStatus(200)
        
    })
  },


  getOneUser : function(req, res) {
    var params = [req.params.id];
    usersModel.getOneUser(params, function(err, result){
      if(err){
        console.log(err)
      } res.send(result)
      
    })
  },

  updateUser : (req , res)=>{

    var params =[req.body.userName , req.body.age , req.body.gender , req.body.email , req.body.password , req.params.id];
    usersModel.updateUser(params , function(err , results){
      if(err){console.log("you are have an error in controller" , err)}
      res.sendStatus(200)
    })
  },

  deleteUser:(req,res)=>{
    var params = [req.params.id];
    usersModel.deleteUser(params,function(err,result){
      if(err){console.log(`you have an error in doctor controller ${err}`)};
      res.sendStatus(200)
    })
  }

}

const usersModel = require('../Models/users');
const db = require("../Models/database");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();


// call back function 
module.exports = {


  getAllUsers: (req, res) => {
    usersModel.getAllUsers(function (err, results) {

      if (err) { console.log('error in users controller', err) }
      res.json(results);

    })
  },


  createUser: async (req, res) => {
    console.log("hiiiiiiiiiiiiii")
    //console.log(req.body.userName);

    //console.log(params);
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // console.log(hashedPassword)
    var params = [req.body.userName, req.body.age, req.body.gender, req.body.email, hashedPassword];
    // console.log(req.body.userName,"create")
    usersModel.createUser(params, function (err, results) {
      if (err) console.log("you are have an error in controller", err)

      // res.sendStatus(200)
      res.send(results)

    })
  },


  Auth: (req, res) => {
    console.log("jjjjjjjjjjjjjjj")
    //authenticateToken(req,res);
    //console.log("kkkkkkkkkkkkkkkkk")
    const token = req.body.accessToken;

    if (!token)
      res.status(400).send("we need a token");
    else {
      console.log("auth", token)
      jwt.verify(token, `${process.env.JWT_KEY}`, (err, user) => {
        if (err) res.status(400).send("you failed to authenticate")
        console.log(user)
        req.userId = user;
        res.send("you are authenticated");
        // res.json({auth:true,  accessToken: accessToken , result:"you are Authenticated"});
        //next()
      })
    }

    //res.status(200).send("you are Authenticated");
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  verifyUser: async (req, res) => {

    var params = [req.body.userName, req.body.password];
    var password = req.body.password;
    var username = req.body.userName;
    // console.log("hello",req.body)
    // console.log(password, username, " verifyyyyyyyyyyyyyyyyyyy")

    usersModel.verifyUserModel(params, async function (err, results) {
      //console.log(results[0].password,"resulttttttttttttt")
      if (results.length > 0) {
        var id = results[0].userId
        var dbPassword = results[0].password;

        const validpassword = await bcrypt.compare(password, dbPassword);
        if (!validpassword) return res.status(400).send("Password not correct");
        const accessToken = jwt.sign({ id: id }, `${process.env.JWT_KEY}`);
        console.log("toooooooooooooooooooooooken ..........", accessToken);

        res.json({ result: "user exist", accessToken: accessToken });

      }
      else {
        res.send("User doesn't exist");
      }
    })

  },

  /////////////////////////////////////////////////////////////////////////////////
  updateUser: (req, res) => {
    var params = [req.body.userName, req.body.age, req.body.gender, req.body.email, req.body.password, req.params.id];
    usersModel.updateUser(params, function (err, results) {
      if (err) { console.log("you are have an error in controller", err) }
      res.sendStatus(200)
    })
  },
  getOneUser: function (req, res) {
    var params = [req.params.id];
    usersModel.getOneUser(params, function (err, result) {
      if (err) {
        console.log(err)
      } res.send(result)
    })
  },

  deleteUser: (req, res) => {
    var params = [req.params.id];
    usersModel.deleteUser(params, function (err, result) {
      if (err) { console.log(`you have an error in doctor controller ${err}`) };
      res.sendStatus(200)
    })
  }

}

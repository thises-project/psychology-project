const db = require('./database')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


module.exports= {
    getAllUsers:(callback)=>{
        var queryStr = `SELECT * FROM userstable `;
        db.query(queryStr,function(err,result){
            callback(err,result)
        });
    
    },
   

    
    createUser:(params,callback)=>{
        
        var queryStr = `INSERT INTO userstable (userName , age , gender , email , password) VALUES (?,?,?,?,?)`;
        db.query(queryStr , params, function(err , result){
            callback(err,result)
           
        })
    },

    Auth:(params, callback)=>{
        
        var queryStr = `SELECT * FROM userstable WHERE userName = ?`;
        db.query(queryStr , params, function(err , result){
            callback(err,result)
           
        })
    },

    verifyUserModel:(params, callback)=>{
        console.log("i am a modellllllllllllllllllllllll")
        var queryStr = `SELECT * FROM userstable WHERE userName = ? `;
        db.query(queryStr , params, function(err , result){
            console.log("it entered" ,result)
            callback(err,result)
        })
    },

    updateUser: (params, callback) => {
        var queryStr = `UPDATE userstable SET userName = ?, age = ?, gender=? , email=? , password = ? WHERE userId = ?`;
        db.query(queryStr, params, function (err, result) {
            callback(err, result)
        })
    },

    getOneUser: (params, callback) => {
        var queryStr = `SELECT * from userstable WHERE userId = ?`;
        db.query(queryStr, params, function (err, result) {
            callback(err, result)
        })
    },

    deleteUser:(params , callback)=>{
        var queryStr = `DELETE FROM userstable WHERE userId = ?`;
        db.query(queryStr , params , function(err,result){
            callback(err,result)
        })
    }

}
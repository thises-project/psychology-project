const mysql = require('mysql');
// const dbconfig = require("../db-config/db.config")

const dbconfig= require('../../config/keys')

const connection = mysql.createConnection({
  HOST:     dbconfig.HOST,
  USER:     dbconfig.USER,
  PASSWORD: dbconfig.PASSWORD,
  DB: dbconfig.DB
});

connection.query('select 1 + 1', (err, rows) => { 
  if (err) throw err;  
    console.log("Connected! , hello");
});

module.exports = connection;
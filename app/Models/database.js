const mysql = require('mysql');
// const dbconfig = require("../db-config/db.config")

// const dbconfig= require('../../config/keys')

// module.exports={
//   MYSQL:"jllgshllWEUJHGHYJkjsfjds90",
//   HOST:"us-cdbr-east-02.cleardb.com",
//   USER:"b0633d23088e42",
//   PASSWORD:"a0a5e72a",
//   DB:"heroku_f537f4068a5e975",
//   JWT_KEY: "secret"}





const connection = mysql.createPool({
  HOST:"us-cdbr-east-02.cleardb.com",
  USER:"b0633d23088e42",
  PASSWORD:"a0a5e72a",
  DB:"heroku_f537f4068a5e975",
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


// connection.query('select 1 + 1', (err, rows) => { 
//   if (err) throw err;  
//     console.log("Connected! , hello");
// });

module.exports = connection;
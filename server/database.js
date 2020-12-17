var mysql = require('mysql');

// var db_config= mysql.createConnection({
//   host: "us-cdbr-east-02.cleardb.com",
//   user: "b0633d23088e42",
//   password: "a0a5e72a",
//   database :'heroku_f537f4068a5e975'

// });

// pool.query('select 1 + 1', (err, rows) => {});
// db_config.connect(function(err) {  
//   if (err) throw err;  
//   console.log("Connected!");
// })

// var connection;
// function connectDb() {
//   connection  = mysql.createConnection({
//     host: 'us-cdbr-east-02.cleardb.com',
//     user: "b0633d23088e42",
//     database: 'heroku_f537f4068a5e975',
//     password: "a0a5e72a"
//   });
  
//   connection.on('error', connectDb()); // probably worth adding timeout / throttle / etc
// }

const pool = mysql.createPool({
  host: "us-cdbr-east-02.cleardb.com",
  user: "b0633d23088e42",
  password: "a0a5e72a",
  database :'heroku_f537f4068a5e975'
});

pool.query('select 1 + 1', (err, rows) => { 
  if (err) throw err;  
    console.log("Connected!");
});

module.exports = pool;
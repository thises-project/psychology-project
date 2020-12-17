const db = require('../database')
const routs = require('../routes')

module.exports={
    createUser:(callback)=>{
        var queryStr = 'INSERT INTO userstable (userName , age , gender , email , password) VALUES (?,?,?,?,?)';
        db.query(queryStr , function(err , result){
            callback(err,result)
        })
    }
}
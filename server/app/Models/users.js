const db = require('./database')

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
    }
}
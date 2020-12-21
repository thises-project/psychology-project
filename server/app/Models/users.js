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
    },
     
    getOneUser:(params,callback) => {
        var queryStr = `SELECT * from userstable WHERE userId = ?`;
        db.query(queryStr, params, function(err, result){
            callback(err, result)
        })
    },
    updateUser:(params , callback)=>{
        var queryStr = `UPDATE userstable SET userName = ?, age = ?, gender=? , email=? , password = ? WHERE userId = ?`;
        db.query(queryStr , params , function(err , result){
            callback(err,result)
        })
    },
    deleteUser:(params , callback)=>{
        var queryStr = `DELETE FROM userstable WHERE userId = ?`;
        db.query(queryStr , params , function(err,result){
            callback(err,result)
        })
    }

}
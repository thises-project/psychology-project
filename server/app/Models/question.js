//Connect With questions Table from our DB .. 


const db = require('./database')

module.exports= {
    createQuestions:(params,callback)=>{
        var queryStr = `INSERT INTO questions ( question ) VALUES (?)`;
        db.query(queryStr,params,function(err,result){ 
            callback(err,result)
        })
    
    },

    getAllQuestions:(callback) => {
        var query = `SELECT * FROM questions`;
        db.query(query,function(err,result){
            callback(err,result)
        })
    }
}
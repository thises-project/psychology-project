// const db = require('./database');
// module.exports = {
//     createQuestion :(params , callback)=>{
//         var queryStr = 
//     }
// }
const db = require('./database')

module.exports= {
    createQuestions:(callback)=>{
        var query = `INSERT INTO questions ( question , user_Id  ) VALUES (?,?)`;
        db.query(query,function(err,result){
            callback(err,result)
        });
    
    },
    getAllQuestions:(callback)=>{
        var questionQuery = `SELECT * FROM questions`;
        db.query(questionQuery , function(err,result){
            callback(err,result)
        })
    }
}
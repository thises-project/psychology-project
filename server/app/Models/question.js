// const db = require('./database');
// module.exports = {
//     createQuestion :(params , callback)=>{
//         var queryStr = 
//     }
// }
const db = require('./database')

module.exports= {
    createQuestions:(callback)=>{
        var queryStr = `INSERT INTO questions ( question , user_Id  ) VALUES (?,"null")`;
        db.query(queryStr,function(err,result){
            callback(err,result)
        });
    
    },
}
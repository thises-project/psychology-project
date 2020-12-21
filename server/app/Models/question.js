// const db = require('./database');
// module.exports = {
//     createQuestion :(params , callback)=>{
//         var queryStr = 
//     }
// }
const db = require('./database')

module.exports= {
    createQuestions:(params,callback)=>{
        // console.log(result);
        var queryStr = `INSERT INTO questions ( question ) VALUES (?)`;
        db.query(queryStr,params,function(err,result){ 
            callback(err,result)
        })
    
    }
}
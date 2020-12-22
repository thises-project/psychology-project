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
   
    getAllQuestionsAndAnswers:(callback)=>{
        var query = ` SELECT questions.question , answers.answer ,doctors.doctorName  from  ((answers INNER JOIN questions ON answers.question_Id = questions.questionId) INNER JOIN doctors ON answers.doctor_Id = doctors.doctorId); `;
        db.query(query,function(err,results){
            callback(err,results)
        })
    }
    }
  

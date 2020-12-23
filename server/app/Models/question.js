//Connect With questions Table from our DB .. 
const db = require('./database')

module.exports= {
    createQuestions:(params,callback)=>{
        var queryStr = `INSERT INTO questions ( question ) VALUES (?)`;
        db.query(queryStr,params,function(err,result){ 
            callback(err,result)
        })
    
    },
   
    getAllQuestionsAndAnswers:(callback)=>{
        var query = ` SELECT questions.question , answers.answer ,doctors.doctorName  from  ((answers INNER JOIN questions ON answers.question_Id = questions.questionId) INNER JOIN doctors ON answers.doctor_Id = doctors.doctorId); `;
        db.query(query,function(err,results){
            callback(err,results)
        })
    }
    ,
  

    getAllQuestions:(callback) => {
        var query = `SELECT * FROM questions`;
        db.query(query,function(err,result){
            callback(err,result)
        })
    },

    //Create Answer ..
    createAnswer: (params, callback) => {
        var query = `INSERT INTO answers (answer) VALUES (?)`;
        db.query(query, params, function (err, result) {
            callback(err, result)
        })
    } ,   

    getAllQuestionsAndAnswersForOneUser:(params ,callback)=>{
        var query = ` SELECT questions.question , answers.answer ,doctors.doctorName  from  ((answers INNER JOIN questions ON answers.question_Id = questions.questionId) INNER JOIN doctors ON answers.doctor_Id = doctors.doctorId) WHERE questions.user_Id= ?; `;
        db.query(query,params ,function(err,results){
            callback(err,results)
        })
    }
}

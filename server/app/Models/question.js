//Connect With questions Table from our DB .. 


const db = require('./database')

module.exports = {
    // Create Questions ..
    createQuestions: (params, callback) => {
        var queryStr = `INSERT INTO questions ( question ) VALUES (?)`;
        db.query(queryStr, params, function (err, result) {
            callback(err, result)
        })

    },

    // Get All Questions ..
    getAllQuestions: (callback) => {
        var query = `SELECT * FROM questions`;
        db.query(query, function (err, result) {
            callback(err, result)
        })
    },

    //Create Answer ..
    createAnswer: (params, callback) => {
        var query = `INSERT INTO answers (answer, question_Id, doctor_Id) VALUES (?,?,?)`;
        db.query(query, params, function (err, result) {
            callback(err, result)
        })
    }
}
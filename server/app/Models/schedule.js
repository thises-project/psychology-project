const db = require('./database');
module.exports = {

    createSchedule: (params, callback) => {
        var query = 'INSERT INTO schedule (doctor_Id , date , startAt,endAt) VALUES (?,?,?,?) ;';
        db.query(query, params, function (err, result) {
            callback(err, result)
        })
    },
    getScheduleForUser: (params, callback) => {
        var query = 'Select * from schedule  where doctor_Id = ? and date = ?;';
        // var query = 'Select * from schedule;';

        db.query(query, params, function (err, result) {
            callback(err, result)
        })
    },
    getScheduleForDoctor: (params, callback) => {
        var query = 'Select * from schedule  where doctor_Id = ? and date = ?;';
        // var query = 'Select * from schedule;';

        db.query(query, params, function (err, result) {
            callback(err, result)
        })
    },

}
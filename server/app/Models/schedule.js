
const db = require('./database');
module.exports = {
    createSchedule: (params, callback) => {
        var query = 'INSERT INTO schedule (doctor_Id , date , startAt,endAt) VALUES (?,?,?,?) ;';
        db.query(query, params, function (err, result) {
            callback(err, result)
        })
    },
    getScheduleForUser: (params, callback) => {
        // var query = 'Select * from schedule  where doctor_Id = ? ';
        // var query = 'Select * from schedule  where doctor_Id = ? and date = ?;';
        var queryStr = 'Select DATE_FORMAT(date,"%Y-%m-%d") ,startAt , endAt from schedule where doctor_Id = ? and date = ?;';
        db.query(queryStr, params, function (err, result) {
            callback(err, result)
        })
    },
    getScheduleForDoctor: (params, callback) => {
        var query = 'Select * from schedule  where doctor_Id = ? ';
        // var query = 'Select * from schedule;';
        db.query(query, params, function (err, result) {
            callback(err, result)
        })
    },
}
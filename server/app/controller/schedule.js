var scheduleModel = require('../Models/schedule')
module.exports = {

    createSchedule: (req, res) => {

        var params = [req.params.id, req.body.selectedDate.date, req.body.selectedDate.startTime, req.body.selectedDate.endTime];
        console.log(params)
        scheduleModel.createSchedule(params, function (err, result) {
            if (err) { console.log("you are have an error in schedule controller ") }
            console.log("created", result)
            res.json(result);
        })

    },
    getScheduleForUser: (req, res) => {
        var params = [req.body.doctor_Id, req.body.date];
        scheduleModel.getScheduleForUser(params, function (err, result) {
            if (err) { console.log("you are have an error in schedule controller ") }
            res.json(result);
        })

    },
    getScheduleForDoctor: (req, res) => {
        var params = [req.body.doctor_Id];
        scheduleModel.getScheduleForDoctor(params, function (err, result) {
            if (err) { console.log("you are have an error in schedule controller ") }
            res.json(result);
        })
    }

}
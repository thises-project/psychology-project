const db = require("../Models/database")
module.exports ={
    createAppointment : (params , callback )=>{
        var query ="INSERT INTO appointment (user_Id , doctor_Id , date , startTime , endtime) Values (?,?,?,?,?)";
        db.query(query , params , function(err , results){
            callback(err , results);
        })
    },
    getAppointmentForDoctor :(params , callback)=>{
        var query = "SELECT userstable.userName , DATE_FORMAT(appointment.date, '%m %d %Y'), appointment.startTime, appointment.endtime from ((appointment INNER JOIN doctors ON appointment.doctor_Id = doctors.doctorId)INNER JOIN userstable ON appointment.user_Id = userstable.userId) where doctor_Id = ?"
        db.query(query , params , function(err , result){
            callback(err,result)
        })
    },
    getAppointmentForOneUser:(params , callback)=>{
        var query = "SELECT doctors.doctorName , appointment.date, appointment.startTime, appointment.endtime from ((appointment INNER JOIN doctors ON appointment.doctor_Id = doctors.doctorId)INNER JOIN userstable ON appointment.user_Id = userstable.userId) where user_Id = ?"
        db.query(query , params , function(err , result){
            callback(err,result)
        })
    }
    

}
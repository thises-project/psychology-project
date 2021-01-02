const db = require("./database")
module.exports ={
    createAppointment : (params , callback )=>{
        var query ="INSERT INTO appointment (user_Id , doctor_Id , date , startTime , endtime) Values (?,?,?,?,?)";
        
        db.query(query , params , function(err , results){
            console.log("hello from models " ,params)
            callback(err , results);
        })
    },
    getAppointmentForDoctor :(params , callback)=>{
        var query = "SELECT userstable.userName , appointment.date, appointment.startTime, appointment.endtime from ((appointment INNER JOIN doctors ON appointment.doctor_Id = doctors.doctorId)INNER JOIN userstable ON appointment.user_Id = userstable.userId) where doctor_Id = ?"
        db.query(query , params , function(err , result){
            callback(err,result)
        })
    },
    getAppointmentForOneUser:(params , callback)=>{
        var query = "SELECT doctors.doctorName , appointment.date, appointment.startTime, appointment.endTime from ((appointment INNER JOIN doctors ON appointment.doctor_Id = doctors.doctorId)INNER JOIN userstable ON appointment.user_Id = userstable.userId) where user_Id = ?"
        db.query(query , params , function(err , result){
            callback(err,result)
        })
    }
    

}
var appointmentModels = require('../Models/appointment')
module.exports = {
    createAppointment : (req , res)=>{
        var params = [req.body.user_Id , req.body.doctor_Id , req.body.date , req.body.startTime , req.body.endtime];
        
        appointmentModels.createAppointment(params , function(err , result){
            if(err){console.log("you are have an error in schedule controller " )}
            res.json(result);
        })

    },
    getAppointmentForDoctor:(req,res) =>{
        var params = [req.params.id];
        appointmentModels.getAppointmentForDoctor(params, function(err,results){
            if(err){console.log("you are have an error in your appointement controller" , err)}
            else{
                res.jsosn(results)
            }
        })
    },
    getAppointmentForOneUser:(req,res) =>{
        var params = [req.params.id];
        appointmentModels.getAppointmentForOneUser(params, function(err,results){
            if(err){console.log("you are have an error in your appointement controller" , err)}
            else{
                res.json(results)
            }
        })
    }


}
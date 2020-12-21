const db = require("../Models/database")
const doctorModel = require("../Models/doctors");


module.exports ={
    getAllDoctors:(req , res)=>{
        doctorModel.getAllDoctors(function(err , results){
            if(err){console.log(`you have an error in doctor controller ${err}`)}
            res.json(results)
        })
    },
    getOneDoctor:(req , res)=>{
        var params = [req.params.id];
        doctorModel.getOneDoctor(params , function(err , result){
            if(err){console.log(`you have an error in doctor controller ${err}`)}
            res.json(result);
        })

    },
    updateDoctor:(req , res)=>{
        var params = [req.body.doctorName , req.body.doctorSpeciality , req.body.bio ,req.body.email,req.body.password ,req.body.image, req.params.id];
        doctorModel.updateDoctor(params , function(err , result ){
            if(err) {console.log(`you have an error in doctor controller ${err}`)};
            res.sentStatus(200);
        })
    },
    deleteDoctor :(req,res )=>{
        var params = [req.params.id];
        doctorModel.deleteDoctor(params ,function(err , result){
            if(err){console.log(`you have an error in doctor controller ${err}`)};
            res.sendStatus(200)
        })
    }
    

}

const db = require("./database")

module.exports = {



    verifyDoctorModel :(params, callback)=>{
        console.log("i am a doctor modellllllllllllllllllllllll")
        var queryStr = `SELECT * FROM doctors WHERE doctorName = ? `;
        db.query(queryStr , params, function(err , result){
            console.log("it entered" ,result)
            callback(err,result)
        })
    },



    getAllDoctors:(callback)=>{
         var queryStr ="SELECT * From doctors";
         db.query(queryStr , function(err , results){
             callback(err,results);
         })

    },
    getOneDoctor:(params , callback) =>{
        var queryStr = "SELECT * FROM doctors where doctorId = ?";
        db.query(queryStr ,params , function(err , result ){
            callback(err,result)
        })
    },

    updateDoctor:(params , callback)=>{
        var queryStr=`UPDATE doctors SET  doctorName = ?, doctorSpeciality = ? , bio = ?,email=? , password = ? , image = ? WHERE doctorId = ?`;
        db.query(queryStr , params , function(err , result){
            callback(err , result)
        })
    },

    deleteDoctor:(params , callback)=>{
        var queryStr=`DELETE FROM doctors WHERE doctorId = ?`;
        db.query(queryStr , params , function(err , result){
            callback(err , result)
        })
    }, 
    
    
    //rating
    postRating: (params,callback)=>{
        // UPDATE doctors SET  doctorName = ?, doctorSpeciality = ? , bio = ?,email=? , password = ? , image = ? WHERE doctorId = ?
        var queryStr=`UPDATE doctors SET ratingSum = ? , ratingCount = ? WHERE doctorName = ?`;
        db.query(queryStr,params,function(err,result){
            callback(err,result)
        })

    },

    getAllRatings:(params,callback)=>{
        var queryStr=`SELECT * From doctors`;
        db.query(queryStr,params,function(err,result){
            callback(err,result)
        })
    },


}
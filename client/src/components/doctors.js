import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const Doctors = (props) => {
  const [currentId , setCurrrentId] = useState(null);
  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/getAllDoctors")
      .then((res) => {
        // console.log("HIIIIIII");
        setDoctor(res.data);
      })
      .catch((err) => {
        alert("Error fetching doctors List!");
      });
  });

  return (
    <div className="container ml-5 mr-5" style={{ textAlign: "left" }}>
      {doctors.map((doctor,index) => (
        <div
          className="row"
          key={doctor.doctorId}
          style={{ borderBottom: "1px solid silver" }}
        >
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                
                <h2>
                  {doctor.doctorName} 
                </h2><h6>{doctor.doctorId}</h6>
                
               <br/>

                <h4>{doctor.doctorSpeciality}</h4>
                <p className="lead">{doctor.bio}</p>

                <p>
                  {/* <h4 className="badge">  </h4> */}
                  {/* <span className="badge">{doctor.password} </span> */}
                </p>
                <h5>
                  <Badge pill variant="secondary">
                    {doctor.email}
                  </Badge>
            
                </h5>

                <Link
            //'/updateDoctor/:id'
            to={`/bookAppointment/${doctor.doctorId}`}
            
            className="btn btn-danger "
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 100,
                    height: 23,
                    backgroundColor: "blue",
                    borderRadius: 30,
                  }}
                
                >
                Book Video Session
              </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br></br>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Doctors;

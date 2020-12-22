import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";

const Doctors = (props) => {
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
    <div className="col ml-5 mr-5" style={{ textAlign: "left" }}>
      {doctors.map((doctor) => (
        <div
          className="row"
          key={doctor.doctorId}
          style={{ borderBottom: "1px solid silver" }}
        >
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <h2>{doctor.doctorName}</h2>
                <p className="lead">{doctor.bio}</p>
                <p>
                  <span className="badge"> {doctor.email} </span>
                  <span className="badge">{doctor.password} </span>
                </p>
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


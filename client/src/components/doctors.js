import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
import { Link } from "react-router-dom";

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
    <div className="container ml-5 mr-5" style={{ textAlign: "left" }}>
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
                <Link
                  //'/updateDoctor/:id'
                  to={`/updateDoctor/${doctor.doctorId}`}
                  className="btn btn-info "
                  style={{ marginLeft: "5px" }}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger "
                  style={{ marginLeft: "5px" }}
                  // onClick={() => deleteDoctor(doctor.doctorId)}
                >
                  Delete
                </button>
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

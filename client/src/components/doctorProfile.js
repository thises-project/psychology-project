import { React, useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Doctors from "./doctors";

const DoctorProfile = (props) => {
  const [doctorProfile, setDoctorProfile] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/getOneDoctor/" + props.match.params.id)
      .then((res) => {
        // console.log(res.data[0]);
        setDoctorProfile({
          doctorName: res.data[0].doctorName,
          doctorSpeciality: res.data[0].doctorSpeciality,
          bio: res.data[0].bio,
          email: res.data[0].email,
          password: res.data[0].password,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);

  const deleteConfirm = (id) => {
    let answer = window.confirm(
      "Are you sure you want to delete this account?"
    );
    if (answer) {
      deleteDoctor(id);
    }
  };

  const deleteDoctor = (props) => {
    // console.log('delete', id, ' doctor');
    axios
      .delete(
        "http://localhost:5000/doctor/deleteDoctor/" + props.match.params.id
      )
      .then((res) => {
        console.log("Hello from Deletedoctor");
        Doctors();
      })
      .catch((err) => alert("Error Deleting this account"));
  };

  return (
    <div>
      <div className="col ml-4 mr-4" style={{ textAlign: "left" }}>
        <div
          className="row"
          key={doctorProfile.doctorId}
          // style={{ borderBottom: "1px solid silver" }}
        >
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <h2>{doctorProfile.doctorName}</h2>
                <h4>{doctorProfile.doctorSpeciality}</h4>
                <p className="lead">{doctorProfile.bio}</p>
                <p>
                  <span className="badge"> {doctorProfile.email} </span>
                  <br></br>
                  <span className="badge">{doctorProfile.password} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col mr-5">
          <Link
            // to={`/doctor/updateDoctor/${doctor.id}`}
            className="btn btn-info "
          >
            Edit
          </Link>

          <button
            className="btn btn-danger "
            style={{ marginLeft: "5px" }}
            onClick={() => deleteConfirm(doctorProfile.id)}
          >
            Delete
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorProfile;

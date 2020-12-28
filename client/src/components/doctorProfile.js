import { React, useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
import { Link } from "react-router-dom";

const DoctorProfile = (props) => {
  const [doctorProfile, setDoctorProfile] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/getOneDoctor/" + `${window.localStorage.doctorId}`)
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
  }, [window.localStorage.doctorId]);

  return (
    <div className="container ml-5 mr-5">
      <div style={{ textAlign: "left" }}>
        <div
          className="row"
          key={doctorProfile.doctorId}
          // style={{ borderBottom: "1px solid silver" }}
        >
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <h2>{doctorProfile.doctorName} </h2>
                <h4>{doctorProfile.doctorSpeciality}</h4>
                <p className="lead">{doctorProfile.bio}</p>
                <p>
                  <h4>
                    {" "}
                    <span class="badge bg-primary">{doctorProfile.email}</span>
                  </h4>

                  {/* <h4>
                    {" "}
                    <span class="badge bg-primary">
                      {doctorProfile.password}
                    </span>
                  </h4> */}
                  <br></br>
                </p>
              </div>
         
            </div>
          </div>
        </div>
        <div className="col mr-5">
        <Link
                  //'/updateDoctor/:id'
                  to={`/updateDoctor/${window.localStorage.doctorId}`}
                  className="btn btn-info "
                  style={{ marginLeft: "5px" }}
                >
                  Edit
                </Link>
        </div>
        <br/>
        {/* <button
                  className="btn btn-danger "
                  style={{ marginLeft: "5px" }}
                  // onClick={() => deleteDoctor(doctor.doctorId)}
                >
                  Delete
                </button> */}
      </div>

      <Footer />
    </div>
  );
};

export default DoctorProfile;

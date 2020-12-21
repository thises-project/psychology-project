import React, { useState, useEffect } from "react";
import axios from "axios";

function DoctorProfile(props) {
  console.log(props);
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/getOneDoctor/" + props.match.params.id)
      .then((res) => {
        console.log(res.data[0]);
        setDoctor({
          doctorName: res.data[0].doctorName,
          doctorSpeciality: res.data[0].doctorSpeciality,
          bio: res.data[0].bio,
          email: res.data[0].email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);
  return (
    <div>
      <h3>{doctor.doctorName}</h3>
      <h3>{doctor.doctorSpeciality}</h3>
      <h3>{doctor.bio}</h3>
      <h3>{doctor.email}</h3>
    </div>
  );
}
export default DoctorProfile;

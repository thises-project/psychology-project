import React, { useState, useEffect } from "react";
import axios from "axios";
function DoctorProfile(props) {
  const [doctorProfile, setDoctorProfile] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctor/getOneDoctor${props.match.params.id}`)
      .then((response) => setDoctorProfile(response.data))
      .catch((error) => alert("Error fetching doctor profile!"));
    // eslint-disable-next-line
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get(`${process.env.REACT_APP_API}/doctor/getOneDoctor/${props.match.params.id}`)
  //       .then(res => setDoctorProfile(res.data)
  //         // // console.log(res.data[0]);
  //         // setDoctorProfile({
  //         //   doctorName: res.data[0].doctorName,
  //         //   doctorSpeciality: res.data[0].doctorSpeciality,
  //         //   bio: res.data[0].bio,
  //         //   email: res.data[0].email,
  //         // });
  //     //   })
  //       .catch(err => alert("Error fetching doctors!")
  //   }
  //   }, [props.match.params.id]);
  return (
    <div>
      <h3>{doctorProfile.doctorName}</h3>
      <h3>{doctorProfile.doctorSpeciality}</h3>
      <h3>{doctorProfile.bio}</h3>
      <h3>{doctorProfile.email}</h3>
      <h3>{doctorProfile.password}</h3>
    </div>
  );
}
export default DoctorProfile;

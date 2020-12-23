// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UpdateDoctor = (props) => {
//   const [UpdatedoctorProfile, setUpdateDoctorProfile] = useState({
//     doctorName: "",
//     doctorSpeciality: "",
//     bio: "",
//     email: "",
//     password: "",
//   });
//   const {
//     doctorName,
//     doctorSpeciality,
//     bio,
//     email,
//     password,
//   } = UpdatedoctorProfile;

//   useEffect((props) => {
//     axios
//       .get('http://localhost:5000/doctor/getOneDoctor/' + props.match.params.id))
//     .then((response) => {
//       const {
//         doctorName,
//         doctorSpeciality,
//         bio,
//         email,
//         password,
//       } = response.data;
//       setUpdateDoctorProfile({
//         ...UpdatedoctorProfile,
//         doctorName,
//         doctorSpeciality,
//         bio,
//         email,
//         password,
//       });
//     })
//     .catch((error) => alert("Error loading Doctor Profile"));
//   // eslint-disable-next-line
// }, []);



// // onchange event handler
// const handleChange = (name) => (event) => {
//   // console.log('name', name, 'event', event.target.value);
//   setUpdateDoctorProfile({
//     ...UpdatedoctorProfile,
//     [name]: event.target.value,
//   });
// };

// const handleSubmit = (props) => {
//   // event.preventDefault();
//   axios
//     //get("http://localhost:5000/doctor/updateDoctor/" + props.match.params.id)
//     .put('http://localhost:5000/doctor/updateDoctor/' + props.match.params.id) {
//     doctorName,
//       doctorSpeciality,
//       bio,
//       email,
//       password,
//       })
//       .then((response) => {
//         console.log(response);
//         const {
//           doctorName,
//           doctorSpeciality,
//           bio,
//           email,
//           password,
//         } = response.data;
//         // empty state
//         setUpdateDoctorProfile({
//           doctorName,
//           doctorSpeciality,
//           bio,
//           email,
//           password,
//         });
//         // show sucess alert
//         alert(`Doctor ${doctorName} was Edited`);
//       })
//   .catch((error) => {
//     console.log(error.response);
//     alert(error.response.data.error);
//   });
//   };

// const showUpdateForm = () => (
//   <form onSubmit={handleSubmit}>
//     <div className="form-group">
//       <label className="text-muted"> Doctor Name</label>
//       <input
//         onChange={handleChange("docorName")}
//         value={doctorName}
//         type="text"
//         className="form-control"
//         placeholder="your name"
//         required
//       />
//     </div>

//     <div className="form-group">
//       <label className="text-muted">Doctor Speciality</label>
//       <textarea
//         onChange={handleChange("doctorSpeciality")}
//         value={doctorSpeciality}
//         type="text"
//         className="form-control"
//         placeholder="scpeciality"
//         required
//       />
//     </div>
//     <div className="form-group">
//       <label className="text-muted">Bio</label>
//       <textarea
//         onChange={handleChange("bio")}
//         value={bio}
//         type="text"
//         className="form-control"
//         placeholder="your bio .."
//         required
//       />
//     </div>
//     <div className="form-group">
//       <label className="text-muted">Email</label>
//       <input
//         onChange={handleChange("email")}
//         value={email}
//         type="text"
//         className="form-control"
//         placeholder="your email"
//         required
//       />
//     </div>
//     <div className="form-group">
//       <label className="text-muted">Password</label>
//       <input
//         onChange={handleChange("password")}
//         value={password}
//         type="text"
//         className="form-control"
//         placeholder="password"
//         required
//       />
//     </div>
//     <div>
//       <button className="btn btn-primary">Submit</button>
//     </div>
//   </form>
// );

// return (
//   <div className="container pb-5">
//     <Nav />
//     <br />
//     <h1> EDIT</h1>
//     {showUpdateForm()}
//   </div>
// );
// };

// export default UpdateDoctor;

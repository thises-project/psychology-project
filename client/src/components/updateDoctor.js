import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateDoctor = (props) => {
  const [state, setState] = useState({
    doctorId: "",
    doctorName: "",
    doctorSpeciality: "",
    bio: "",
    email: "",
    password: "",
  });

  const { doctorId, doctorName, doctorSpeciality, bio, email } = state;

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/getOneDoctor/" + props.match.params.id)
      .then((res) => {
        // console.log(res.data[0]);
        setState({
          doctorId: res.data[0].doctotrId,
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

  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://localhost:5000/doctor/getOneDoctor/" +
  //         props.match.params.doctotrId
  //     )
  //     .then((response) => {
  //       const {
  //         doctorId,
  //         doctorName,
  //         doctorSpeciality,
  //         bio,
  //         email,
  //       } = response.data;
  //       setState({
  //         ...state,
  //         doctorId,
  //         doctorName,
  //         doctorSpeciality,
  //         bio,
  //         email,
  //       });
  //     })
  //     .catch((error) => alert("Error getting Doctor!"));
  //   // eslint-disable-next-line
  // }, []);

  const handleChange = (name) => (event) => {
    // console.log('name', name, 'event', event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    axios
      .put("http://localhost:5000/doctor/getOneDoctor/" + props.match.params.id)
      .then((res) => {
        // console.log(res.data[0]);
        setState({
          doctorId: res.data[0].doctotrId,
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

    // axios
    //   .put("http://localhost:5000/doctor/updateDoctor/" + doctorId, {
    //     doctorId,
    //     doctorName,
    //     doctorSpeciality,
    //     bio,
    //     email,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     const {
    //       doctorId,
    //       doctorName,
    //       doctorSpeciality,
    //       bio,
    //       email,
    //     } = response.data;
    //     setState({
    //       ...state,
    //       doctorId,
    //       doctorName,
    //       doctorSpeciality,
    //       bio,
    //       email,
    //     });
    //     alert(`Doctor ${doctorName} was edited !`);
    //   });
  };

  const showUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Doctor ID</label>
        <input
          onChange={handleChange("doctorId")}
          value={doctorId}
          type="number"
          className="form-control"
          placeholder="doctorId"
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted"> Doctor Name</label>
        <input
          onChange={handleChange("docorName")}
          value={doctorName}
          type="text"
          className="form-control"
          placeholder="your name"
          required
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Doctor Speciality</label>
        <textarea
          onChange={handleChange("doctorSpeciality")}
          value={doctorSpeciality}
          type="text"
          className="form-control"
          placeholder="scpeciality"
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Bio</label>
        <textarea
          onChange={handleChange("bio")}
          value={bio}
          type="text"
          className="form-control"
          placeholder="your bio .."
          required
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          value={email}
          type="text"
          className="form-control"
          placeholder="your email"
          required
        />
      </div>

      <div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );

  return (
    <div className="container pb-5">
      <br />
      <h1> EDIT FORM</h1>
      {showUpdateForm()}
    </div>
  );
};

export default UpdateDoctor;

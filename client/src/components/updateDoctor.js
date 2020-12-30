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
    cpassword: "",
  });

  const {
    doctorId,
    doctorName,
    doctorSpeciality,
    bio,
    email,
    password,
    cpassword,
  } = state;

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/doctor/getOneDoctor/ +${window.localStorage.doctorId}`
      )
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
        console.log(res.data[0], "dddddddddddddddddddddddddddddd");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [window.localStorage.doctorId]);

  const handleChange = (name) => (event) => {
    // console.log('name', name, 'event', event.target.value);
    setState({ ...state, [name]: event.target.value });
    console.log(state.cpassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.table({ itemName, itemDescription,itemPrice, user });
    axios
      .put(
        "http://localhost:5000/doctor/updateDoctor/" +
          `${window.localStorage.doctorId}`,
        {
          doctorId,
          doctorName,
          doctorSpeciality,
          bio,
          email,
          password,
          cpassword,
        }
      )
      .then((res) => {
        console.log(res);
        const {
          doctorId,
          doctorName,
          doctorSpeciality,
          bio,
          email,
          password,
          cpassword,
        } = res.data;
        // empty state
        setState({
          ...state,
          doctorId,
          doctorName,
          doctorSpeciality,
          bio,
          email,
          password,
          cpassword,
        });
        // show sucess alert
        alert(`Doctor was Edited`);
        window.location = `/doctorProfile/${window.localStorage.doctorId}`;
      })
      .catch((error) => {
        console.log(error.res);
        alert(error.res.data.error);
      });
  };

  const showUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      {/* <div className="form-group">
        <label className="text-muted">Doctor ID</label>
        <input
          onChange={handleChange("doctorId")}
          value={doctorId}
          type="number"
          className="form-control"
          placeholder="doctorId"
          required
        />
      </div> */}

      <div className="form-group">
        <label className="text-muted">
          Please Enter Your Current Password before updating your Information
        </label>
        <input
          onChange={handleChange("cpassword")}
          value={state.cpassword}
          type="cpassword"
          className="form-control"
          placeholder="current password"
          required
        />
      </div>

      <div className="form-group">
        <label className="text-muted"> Doctor Name</label>
        <input
          onChange={handleChange("doctorName")}
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

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-control"
          placeholder="your password"
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

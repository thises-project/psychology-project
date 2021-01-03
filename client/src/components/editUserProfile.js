import React, { useState, useEffect } from "react";
import { updateUser } from "../actions/adduser";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function EditUser(props, { currentId, setCurrentId }) {
  const [editUser, setEditUser] = useState({
    userName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    cpassword: "",
  });
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/users/getOneUser/" +
          `${window.localStorage.userId}`
      )
      .then((res) => {
        //console.log(res.data[0])
        setEditUser({
          userName: res.data[0].userName,
          age: res.data[0].age,
          gender: res.data[0].gender,
          email: res.data[0].email,
          password: res.data[0].password,
        });
        // console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [window.localStorage.userId]);

  const [submitted] = useState(false);
  const dispatch = useDispatch();
  const clear = () => {
    setEditUser({
      userName: "",
      age: "",
      gender: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };

  function handlePassword(e) {
    const { name, value } = e.target;
    setEditUser((cpassword) => ({ ...cpassword, [name]: value }));
    // console.log(editUser.cpassword)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEditUser((editUser) => ({ ...editUser, [name]: value }));
  }

  function editHandleSubmit(e) {
    e.preventDefault();
    var currentId = `${window.localStorage.userId}`;
    if (currentId) {
      // console.log(currentId, "kkkkkkkk");
      dispatch(updateUser(currentId, editUser));
      clear();
    }
    window.location = `/userPro/${window.localStorage.userId}`;
  }
  return (
    <div className="container w-50 p-3">
      <h2>Edit Profile </h2>
      <form name="form" onSubmit={editHandleSubmit}>
        <h5>
          Please Enter your Current Password Before you Update Your Information
        </h5>
        <label className="text-left mb-3"> old Password</label>
        <input
          type="cpassword"
          name="cpassword"
          value={editUser.cpassword}
          onChange={handlePassword}
          required
          className={
            "form-control" +
            (submitted && !editUser.cpassword ? " is-invalid" : "")
          }
        />
        {submitted && !editUser.cpassword && (
          <div className="invalid-feedback">Password is required</div>
        )}

        <label>Username</label>
        <input
          type="text"
          name="userName"
          value={editUser.userName}
          onChange={handleChange}
          className={
            "form-control" +
            (submitted && !editUser.userName ? " is-invalid" : "")
          }
        />
        {submitted && !editUser.userName && (
          <div className="invalid-feedback">Username is required</div>
        )}

        <label>age</label>
        <input
          type="number"
          name="age"
          value={editUser.age}
          onChange={handleChange}
          className={
            "form-control" + (submitted && !editUser.age ? " is-invalid" : "")
          }
        />
        {submitted && !editUser.age && (
          <div className="invalid-feedback">Age is required</div>
        )}

        <label>gender</label>
        <input
          type="text"
          name="gender"
          value={editUser.gender}
          onChange={handleChange}
          className={
            "form-control" +
            (submitted && !editUser.gender ? " is-invalid" : "")
          }
        />
        {submitted && !editUser.gender && (
          <div className="invalid-feedback">gender is required</div>
        )}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={editUser.email}
          onChange={handleChange}
          className={
            "form-control" + (submitted && !editUser.email ? " is-invalid" : "")
          }
        />
        {submitted && !editUser.email && (
          <div className="invalid-feedback">Email is required</div>
        )}

        <label> New Password</label>
        <input
          type="password"
          name="password"
          value={editUser.password}
          onChange={handleChange}
          className={
            "form-control" +
            (submitted && !editUser.password ? " is-invalid" : "")
          }
        />
        {submitted && !editUser.password && (
          <div className="invalid-feedback">Password is required</div>
        )}

        <button className="btn btn-primary">
          {/* {registering && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
          Edit
        </button>
        {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
      </form>
    </div>
  );
}

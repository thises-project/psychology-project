//import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Adduser } from '../actions/adduser';

function Signup() {
  const [user, setUser] = useState({
    userName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });
  const [submitted] = useState(false);
  const dispatch = useDispatch();
  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(Adduser(user));
  }
  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.userName ? " is-invalid" : "")
            }
          />
          {submitted && !user.userName && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <label>age</label>
          <input
            type="text"
            name="age"
            value={user.age}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !user.age ? " is-invalid" : "")
            }
          />
          {
            submitted && !user.age && (
              <div className="invalid-feedback">Age is required</div>
            )
          }
        </div>
        <div className="form-group">
          <label>gender</label>
          <input
            type="text"
            name="gender"
            value={user.gender}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !user.gender ? " is-invalid" : "")
            }
          />
          {submitted && !user.gender && (
            <div className="invalid-feedback">gender is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !user.email ? " is-invalid" : "")
            }
          />
          {submitted && !user.email && (
            <div className="invalid-feedback">Email is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className={
              "form-control" +
              (submitted && !user.password ? " is-invalid" : "")
            }
          />
          {submitted && !user.password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {/* {registering && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
            Sign Up
          </button>
          {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
        </div>
      </form>
    </div>
  );
}
export default Signup;
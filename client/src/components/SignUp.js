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
    usernameError: "",
    ageError: "",
    genderError: "",
    emailError: "",
    passwordError: ""
  });


  const [submitted] = useState(false);
  const dispatch = useDispatch();


  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleValidation() {
    return validate()

  }
  function handleDis() {
    dispatch(Adduser(user));
  }

  function handleSubmit(e) {

    e.preventDefault();
    if (handleValidation()) {
      handleDis()
      //console.log( window.localStorage.type) 
      window.location = "/login";
    }

  }
  function validate() {
    let usernameError = "";
    let ageError = "";
    let genderError = "";
    let emailError = "";
    let passwordError = "";

    console.log(user.userName)

    if (!user.userName) {
      usernameError =
        "your username cannot be blank, please try to make it more than 3 characters!";
    }
    else if (user.userName.length > 0 && user.userName.length <= 3) {
      usernameError = "your username cannot be less than 3 characters!";
    }
    if (!user.age) {
      ageError =
        "your age cannot be blank, please write your true age!";
    }
    if (!user.gender) {
      genderError =
        "your gender cannot be blank, please write your gender(Male/Female)!";
    }

    if (!user.email) {
      emailError =
        "your email cannot be blank, please try to write a correct email";
    }
    if (!user.password) {
      passwordError =
        "your password cannot be blank, please try to make it more than 8 characters";
    }

    else if (user.password.length > 0 && user.password.length < 8) {
      passwordError =
        "your password cannot be less than 8 characters";
    }

    if (usernameError || ageError || genderError || emailError || passwordError) {
      setUser({ usernameError, ageError, genderError, emailError, passwordError });
      return false;
    }
    return true;
  };
  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>Register</h2>
      <form name="form" >
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
          <div style={{ color: "red" }}>{user.usernameError}</div>
          <br></br>
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
        </div >
        <div style={{ color: "red" }}>{user.ageError}</div>
        <br></br>
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
        <div style={{ color: "red" }}>{user.genderError}</div>
        <br></br>
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
        <div style={{ color: "red" }}>{user.emailError}</div>
        <br></br>
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
        <div style={{ color: "red" }}>{user.passwordError}</div>
        <br></br>
        <div className="form-group">
          <button className="btn btn-primary" onClick={handleSubmit}>
            {/* {registering && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
            Sign Up
          </button>
          {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
        </div>
      </form >
    </div >
  );
}
export default Signup;
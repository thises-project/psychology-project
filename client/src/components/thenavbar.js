import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllQuestionsAndAnswers } from "../actions/AddQuestion";
import { Dropdown } from "react-bootstrap";
// import { NotificationManager } from 'react-notifications';

function Navbar() {
  var value = false;
  if (window.localStorage.length > 0) {
    value = true;
  }
  function DocIsLogged(val) {
    if (val) {
      return (
        <Link
          to="/doctorProfile/:id"
          className="nav-link  ml-3 mr-3"
          style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
        >
          <li className="nav-item">My Profile</li>
        </Link>
      );
    }
  }
  function DocIsLogged2(val) {
    if (val) {
      return (
        <Link
          to="/doctorQuestions"
          className="nav-link  ml-3 mr-3"
          style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
        >
          <li className="nav-item"> Patient's Questions</li>
        </Link>
      );
    }
  }

  function DocIsLogged3(val) {
    if (val) {
      return (
        <Link
          to={`/doctorSchedule/${window.localStorage.doctorId}`}
          className="nav-link  ml-3 mr-3"
          style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
        >
          <li className="nav-item">My Schedule</li>
        </Link>
      );
    }
  }

  function UserIsLogged(val) {
    if (val) {
      return (
        <Link
          to="/userPro"
          className="nav-link  ml-3 mr-3"
          style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
        >
          <li className="nav-item">My Profile</li>
        </Link>
      );
    }
  }
  function UserIsLogged2(val) {
    if (val) {
      return (
        <Link
          to="/askQuestions"
          className="nav-link  ml-3 mr-3"
          style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
        >
          <li className="nav-item"> SpeakOut to Us</li>
        </Link>
      );
    }
  }
  function UserIsLogged3(val) {
    if (val) {
      return (
        <Link
          to="/UserQuestionsAnswers/:id"
          className="nav-link  ml-3 mr-3"
          style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
        >
          <li className="nav-item">My Questions</li>
        </Link>
      );
    }
  }

  function UserIsLogged4(val) {
    const history = [];
    const dispatch = useDispatch();
    const questionAndAnswersList = useSelector(
      (state) => state.GetAllQuestionsAndAnswers
    );
    useEffect(() => {
      dispatch(GetAllQuestionsAndAnswers());
    }, [dispatch]);

    if (val) {
      return (
        <Dropdown>
          <Dropdown.Toggle
            variant="info"
            id="dropdown-basic"
            style={{
              borderColor: "#C8E6C9",
              backgroundColor: "#C8E6C9",
              borderRadius: 10,
              marginRight: 3,
              marginLeft: 50,
              fontSize: "12px",
              marginTop: 15,
              marginBottom: 3,
            }}
          >
            <span
              className="dot"
              style={{ width: 20, height: 20, marginTop: 5 }}
            >
              {
                questionAndAnswersList.filter(
                  (questions) => questions.user_Id == window.localStorage.userId
                ).length
              }
            </span>
            My Notification
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ backgroundColor: "blue" }}>
            {questionAndAnswersList
              .filter(
                (questions) => questions.user_Id == window.localStorage.userId
              )
              .map((filterQuestion) => (
                <Dropdown.Item href="http://localhost:3000/UserQuestionsAnswers/:id">
                  {" "}
                  Dr. {filterQuestion.doctorName} answered your question
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      );
    }
  }

  return (
    <nav
      className="navbar navbar-dark mdb-color darken-3 navbar-expand-lg"
      style={{ height: 30, backgroundColor: "#C8E6C9" }}
    >
      <div className="container-fluid mt-3">
        {value === false ? (
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link
                to="/"
                className="nav-link  ml-3 mr-3"
                style={{
                  marginRight: 2,
                  marginLeft: 2,
                  marginTop: 2,
                  marginBottom: 15,
                }}
              >
                <img src={Logo} alt="logo"></img>
              </Link>
              <Link
                to="/doctors"
                className="nav-link ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
              >
                <li className="nav-item">Doctors</li>
              </Link>
              <Link
                to="/questions"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
              >
                <li className="nav-item"> Recent SpeakOut's</li>
              </Link>
              <Link
                to="/articles"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
              >
                <li className="nav-item">Articles</li>
              </Link>
              <Link
                to="/login"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
              >
                <li className="nav-item">SpeakOut to Us</li>
              </Link>
              <Link
                to="/login"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
              >
                <li className="nav-item">Login</li>
              </Link>
              {/* <Link
                to="/rateDoctor"
                className="nav-link ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 10, marginBottom: 3 }}
              >
                <li className="nav-item">Rate Doctor</li>
              </Link> */}
            </ul>
          </div>
        ) : (
          <div className="collapse navbar-collapse" id="navbar NavDropdown">
            <ul className="navbar-nav">
              <Link
                to="/"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 2, marginBottom: 3 }}
              >
                <img src={Logo} alt="logo"></img>
              </Link>
              {UserIsLogged(window.localStorage.userId)}
              {UserIsLogged2(window.localStorage.userId)}
              {UserIsLogged3(window.localStorage.userId)}

              <Link
                to="/doctors"
                className="nav-link ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
              >
                <li className="nav-item">Doctors</li>
              </Link>
              {DocIsLogged(window.localStorage.doctorId)}
              {DocIsLogged2(window.localStorage.doctorId)}
              {DocIsLogged3(window.localStorage.doctorId)}
              <Link
                to="/questions"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
              >
                <li className="nav-item"> Recent SpeakOut's </li>
              </Link>
              <Link
                to="/articles"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
              >
                <li className="nav-item">Articles</li>
              </Link>
              <Link
                to="/logout"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "12px", marginTop: 15, marginBottom: 3 }}
              >
                <li className="nav-item" onClick={logout}>
                  Logout
                </li>
              </Link>
              {UserIsLogged4(window.localStorage.userId)}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
function logout() {
  window.localStorage.clear();
  window.location = "/";
}
export default Navbar;

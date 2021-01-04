import React from "react";
import { Link } from "react-router-dom";
import SpeakoutLogo from "./Logo.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllQuestionsAndAnswers } from "../actions/AddQuestion";

// import { Nav } from "react-bootstrap";

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
          className="nav-link"
          style={{ marginTop: 10, marginLeft: "auto" }}
        >
          My Profile
        </Link>
      );
    }
  }
  function DocIsLogged2(val) {
    if (val) {
      return (
        <Link
          to="/doctorQuestions"
          className="nav-link"
          style={{ marginTop: 10, marginLeft: "auto" }}
        >
          Patient's Questions
        </Link>
      );
    }
  }

  function DocIsLogged3(val) {
    if (val) {
      return (
        <Link
          to={`/doctorSchedule/${window.localStorage.doctorId}`}
          className="nav-link"
          style={{ marginTop: 10, marginLeft: "auto" }}
        >
          My Schedule
        </Link>
      );
    }
  }

  function UserIsLogged(val) {
    if (val) {
      return (
        <Link
          to="/userPro"
          className="nav-link"
          style={{ marginTop: 10, marginLeft: "auto" }}
        >
          My Profile
        </Link>
      );
    }
  }
  function UserIsLogged2(val) {
    if (val) {
      return (
        <Link
          to="/askQuestions"
          className="nav-link"
          style={{ marginTop: 10, marginLeft: "auto" }}
        >
          SpeakOut to Us
        </Link>
      );
    }
  }
  function UserIsLogged3(val) {
    if (val) {
      return (
        <Link
          to="/UserQuestionsAnswers/:id"
          className="nav-link "
          style={{ marginTop: 10, marginLeft: "auto" }}
        >
          My Questions
        </Link>
      );
    }
  }

  function UserIsLogged4(val) {
    const dispatch = useDispatch();
    // use selector to get access to all global store or all gllobal state
    const questionAndAnswersList = useSelector(
      (state) => state.GetAllQuestionsAndAnswers
    );
    useEffect(() => {
      dispatch(GetAllQuestionsAndAnswers());
    }, [dispatch]);
    console.log(questionAndAnswersList, "test filter");
    function onClickOption() {
      // window.location = '/UserQuestionsAnswers'
    }
    if (val) {
      return (
        <div>
          <select
            id="notification"
            style={{
              borderColor: "none",
              backgroundColor: "white",
              borderRadius: 10,
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            <option>My Notifications</option>
            {questionAndAnswersList
              .filter(
                (questions) => questions.user_Id === window.localStorage.userId
              )
              .map((filterQuestion) => (
                <option onClick={onClickOption()}>
                  {/* {window.localStorage.userId} */}
                  Dr. {filterQuestion.doctorName} answered your question
                  {/* {filterQuestion.user_Id} */}
                </option>
              ))}
          </select>
        </div>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid mt-3">
        {value === false ? (
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link to="/" className="nav-link ">
                <img className="logo" src={SpeakoutLogo} alt="logo"></img>
              </Link>
              <Link
                to="/doctors"
                className="nav-link "
                style={{ marginTop: 10, marginLeft: "auto" }}
              >
                Doctors
              </Link>
              <Link
                to="/questions"
                className="nav-link "
                style={{ marginTop: 10, marginLeft: "auto" }}
              >
                Recent SpeakOut's
              </Link>
              <Link
                to="/articles"
                className="nav-link "
                style={{ marginTop: 10, marginLeft: "auto" }}
              >
                Articles
              </Link>
              <Link
                to="/login"
                className="nav-link"
                style={{ marginTop: 10, marginLeft: "auto" }}
              >
                SpeakOut to Us
              </Link>
              <Link
                to="/login"
                className="nav-link"
                style={{ marginTop: 10, marginLeft: "auto" }}
              >
                Login
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
              <Link to="/" className="nav-link">
                <img className="logo" src={SpeakoutLogo} alt="logo"></img>
              </Link>
              {UserIsLogged(window.localStorage.userId)}
              {UserIsLogged2(window.localStorage.userId)}
              {UserIsLogged3(window.localStorage.userId)}

              <Link
                to="/doctors"
                className="nav-link "
                style={{ marginTop: 10, marginLeft: "auto" }}
              >
                Doctors
              </Link>
              {DocIsLogged(window.localStorage.doctorId)}
              {DocIsLogged2(window.localStorage.doctorId)}
              {DocIsLogged3(window.localStorage.doctorId)}
              <Link
                to="/questions"
                className="nav-link"
                style={{ marginTop: 10, marginLeft: "auto" }}
              >
                Recent SpeakOut's
              </Link>
              <Link
                to="/articles"
                className="nav-link"
                style={{ marginTop: 10, marginLeft: "auto" }}
              >
                Articles
              </Link>
              <Link
                to="/logout"
                className="nav-link"
                style={{ marginTop: 10, marginLeft: "auto" }}
                onClick={logout}
              >
                Logout
              </Link>
            </ul>
          </div>
        )}
      </div>
      <nav>{UserIsLogged4(window.localStorage.userId)}</nav>
    </nav>
  );
}
function logout() {
  window.localStorage.clear();
  window.location = "/";
}
export default Navbar;

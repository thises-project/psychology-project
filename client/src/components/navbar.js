import React from "react";
import { Link } from "react-router-dom";
// import Logo from ".../public/Images/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <img src={process.env.PUBLIC_URL + "./Images/logo.jpg"}></img>
            <Link
              to="/"
              className="nav-link  ml-3 mr-3"
              style={{ fontSize: "16px" }}
            >
              Home <span className="sr-only" />
            </Link>
            <Link
              to="/doctors"
              className="nav-link ml-3 mr-3"
              style={{ fontSize: "16px" }}
            >
              <li className="nav-item">Doctors</li>
            </Link>
            <Link
              to="/questions"
              className="nav-link  ml-3 mr-3"
              style={{ fontSize: "16px" }}
            >
              <li className="nav-item">Questions</li>
            </Link>
            <Link
              to="/articles"
              className="nav-link  ml-3 mr-3"
              style={{ fontSize: "16px" }}
            >
              <li className="nav-item">Articles</li>
            </Link>

            <Link
              to="/login"
              className="nav-link  ml-3 mr-3"
              style={{ fontSize: "16px" }}
            >
              <li className="nav-item">Login</li>
            </Link>
            <Link
              to="/signup"
              className="nav-link  ml-3 mr-3"
              style={{ fontSize: "16px" }}
            >
              <li className="nav-item">SignUp</li>
            </Link>
            <Link
              to="/doctorProfile"
              className="nav-link  ml-3 mr-3"
              style={{ fontSize: "16px" }}
            >
              <li className="nav-item">Doctor Profile</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
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
            <Link to="/login" className="nav-link" style={{ fontSize: "16px" }}>
              <li className="nav-item">Login</li>
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
=======
function Navbar (){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="nav-link" style={{fontFamily:"Cursive"}}> Home <span className="sr-only"/></Link>

            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link to="/doctors" className="nav-link" style={{fontFamily:"Cursive"}}>
                        <li className="nav-item">
                            Doctors
                        </li>
                        </Link>
                        <Link to="/questions" className="nav-link" style={{fontFamily:"Cursive"}}>
                        <li className="nav-item">
                            Questions
                        </li>
                        </Link>
                        <Link to="/articles" className="nav-link" style={{fontFamily:"Cursive"}}>
                        <li className="nav-item">
                            Articles
                        </li>
                        </Link>
                        <Link to="/login" className="nav-link" style={{fontFamily:"Cursive"}}>
                        <li className="nav-item"> 
                            Login
                        </li>
                        </Link>
                        <Link to="/signup" className="nav-link" style={{fontFamily:"Cursive"}}>
                        <li className="nav-item"> 
                            SignUp
                        </li>
                        </Link>
                    </ul>
                </div>
                </div>
        </nav>
    )
>>>>>>> 134d3b39403944db8d60e80ec6ee71600978b3ed
}

/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

*/

export default Navbar;

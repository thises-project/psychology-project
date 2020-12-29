import React, { useState, useEffect } from "react";
import StarRating from "./starRating";
import axios from "axios";

const RateDoctor = () => {
  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    axios
      // to get all doctor names inside the dropdown list
      .get("http://localhost:5000/doctor/getAllDoctors")
      .then((res) => {
        // console.log("HIIIIIII");
        setDoctor(res.data);
      })
      .catch((err) => {
        alert("Error fetching doctors List!");
      });
  });

  return (
    <div
      className="container pb-5"
      style={{ width: "50%", alignSelf: "center" }}
    >
      <br />
      <h1> RATE DOCTOR FORM</h1>

      <br />

      <div className=" container">
        <form className="ratingForm ">
          <label className=" ml-2 mr-2">Doctor Name: </label>

          <select name="doctors" id="doctors">
            {doctors.map((doctor) => (
              <option value={doctor.doctorName}>{doctor.doctorName}</option>
            ))}
          </select>

          <br />

          <br />
          <StarRating />
          <br />
          <button
            className="btn btn-danger "
            style={{
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 23,
              backgroundColor: "grey",
              borderRadius: 30,
            }}
          >
            Submit
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default RateDoctor;

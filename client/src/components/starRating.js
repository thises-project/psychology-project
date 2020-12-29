import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

import axios from "axios";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    axios
      // to get all doctor names inside the dropdown list
      .get("http://localhost:5000/doctor/getAllDoctors")
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        alert("Error fetching doctors List!");
      });
  });

  return (
    <div className="main container">
      <form className="ratingForm ">
        <h1> RATE DOCTOR FORM</h1>
        <br />
        <label className=" ml-2 mr-2">Doctor Name: </label>

        <select name="doctors" id="doctors">
          {doctors.map((doctor) => (
            <option value={doctor.doctorName}>{doctor.doctorName}</option>
          ))}
        </select>

        <br />
        <br />
        {/* STAAAAAAAAAAAAAAAAAR RATINNNNNGGG */}
        <div className="starRating">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
          <p> {rating} out of 5 !</p>
        </div>
        {/* STAAAAAAAAAAAAAAAAAR RATINNNNNGGG */}

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
  );
};

export default StarRating;

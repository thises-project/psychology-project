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

  //

  //

  return <StarRating />;
};

export default RateDoctor;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {

  const [rating, setRating] = useState({
    doctorId: "",
    doctorName: "",
    ratingSum:"",
    ratingCount:"",
  });
  const [hover, setHover] = useState(0);

  const { doctorId, doctorName, ratingSum ,ratingCount} = rating;
  

  /////

  const handleChange = (name) => (event) => {
    // console.log('name', name, 'event', event.target.value);
    setRating({ ...rating, [name]: event.target.value });
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios
      .post(
        "http://localhost:5000/doctor/postRating/" + `${window.localStorage.doctorId}`,
        {  ratingSum, ratingCount}
      )
      .then((res) => {
        console.log(res);
        const { doctorId, doctorName, ratingSum ,ratingCount } = res.data;
        // empty state
        setRating({
          ...rating,
          doctorId,
          doctorName,
          ratingSum,
          ratingCount,
        });
        alert(`Doctor was Rated`);
     
        })    
      .catch((error) => {
        // console.log(error.res);
        alert(error.res.data.error);
      });

/////////

  return (
    <div>
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
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
      <p> {rating} out of 5 !</p>
    </div>
  );
};

export default StarRating;
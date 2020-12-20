import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

//C:\Users\farah\Desktop\speak_out\client\public\Images\pic1.png

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "./Images/pic.jpg"}
            alt="not found"
            width="50%"
            height="500px"
          ></img>
          <Carousel.Caption>
            <p>this is the first caption</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "./Images/pic1.png"}
            alt="not found"
            width="50%"
            height="500px"
          ></img>
          <Carousel.Caption>
            <p>this is the second caption</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "./Images/pic2.png"}
            alt="not found"
            width="50%"
            height="500px"
          ></img>
          <Carousel.Caption>
            <p>this is the third caption</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;

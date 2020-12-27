import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";
import Footer from "./footer";
import { Link } from "react-router-dom";


const Home = () => {
  // var value = false;
  // if (window.localStorage.length > 0) {
  //   value = true;
  // }
    // const handleClick = (e) => {
    //   e.preventDefault();
    //   window.history.pushState({},'',href);
    //   // console.log('hi from handle click home page ')
    //   // window.location= '/askQuestions';

    // }

  return (
    <div>
      {/* Carousel begins */}
      <Carousel>
        <Carousel.Item>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "./Images/pic3.jpg"}
            alt="not found"
            width="100%"
            height="500px"
          ></img>
          <Carousel.Caption>
            {/* <p>this is the first caption</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "./Images/pic4.jpg"}
            alt="not found"
            width="100%"
            height="500px"
          ></img>
          <Carousel.Caption>
            {/* <p>this is the second caption</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "./Images/pic5.jpg"}
            alt="not found"
            width="100%"
            height="500px"
          ></img>
          <Carousel.Caption>
            {/* <p>this is the third caption</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Carousel ends */}

      {/* Qoute */}
      <Card>
        {/* <Card.Header>Quote</Card.Header> */}
        <Card.Body>
          <blockquote className="blockquote mb-0" style={{ width: "100%" }}>
            <h2>
              “What mental health needs is more sunlight, more candor, and more
              unashamed conversation.”
            </h2>
            <footer className="blockquote-footer"> – Glenn Close</footer>
          </blockquote>
        </Card.Body>
      </Card>

      {/* qoute ends */}

      <br></br>
      <br></br>
      <Link
          to={'/askQuestions'}
          className="btn btn-info "
          style={{ marginLeft: "5px" }}
          
            >
            Get Free Counsling NOW !
        </Link>
      {/* <Button variant="info" size="lg" style={{ width: "30%" }}>
      <a href={href} onClick={ handleClick ()}> Get Free Counsling NOW !</a>
        Get Free Counsling NOW !
      </Button> */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="row feedback">
        {/* feedbacks starts */}
        {/* person1 */}
        <div className="card testimonial-card" style={{ width: "33%" }}>
          {/* <!-- Background color --> */}
          <div className="card-up indigo lighten-1"></div>

          {/* <!-- Avatar --> */}
          <div className="avatar mx-auto white">
            <img
              src={process.env.PUBLIC_URL + "./Images/person4.jpg"}
              className="rounded-circle"
              alt="woman avatar"
            />
          </div>

          {/* <!-- Content --> */}
          <div className="card-body">
            {/* <!-- Name --> */}
            <h4 className="card-title">Christopher Hunt</h4>

            {/* <!-- Quotation --> */}
            <p>
              <i className="fas fa-quote-left"></i> "The biggest achievement
              I've made is, truly, fighting for myself. Through working with
              Aiko and taking the time to discuss various issues with her, I've
              become a bigger advocate for myself, and I'm so proud of that."
            </p>
          </div>
        </div>

        {/* person2 */}
        <div className="card testimonial-card" style={{ width: "33%" }}>
          {/* <!-- Background color --> */}
          <div className="card-up indigo lighten-1"></div>

          {/* <!-- Avatar --> */}
          <div className="avatar mx-auto white">
            <img
              src={process.env.PUBLIC_URL + "./Images/person7.jpg"}
              className="rounded-circle"
              alt="woman avatar"
            />
          </div>

          {/* <!-- Content --> */}
          <div className="card-body">
            {/* <!-- Name --> */}
            <h4 className="card-title">Nicole Kirkpatrick</h4>

            {/* <!-- Quotation --> */}
            <p>
              <i className="fas fa-quote-left"></i> "I have now been working
              with Sheilah on BetterHelp for about 4 weeks, and can confidently
              say that I am a lot less anxious about my career path now than
              when I first signed up...I am so much better off now than I was
              before."
            </p>
          </div>
        </div>
        {/* person3 */}
        <div className="card testimonial-card" style={{ width: "33%" }}>
          {/* <!-- Background color --> */}
          <div className="card-up indigo lighten-1"></div>

          {/* <!-- Avatar --> */}
          <div className="avatar mx-auto white">
            <img
              src={process.env.PUBLIC_URL + "./Images/person3.jpg"}
              className="rounded-circle"
              alt="woman avatar"
            />
          </div>

          {/* <!-- Content --> */}
          <div className="card-body">
            {/* <!-- Name --> */}
            <h4 className="card-title">Mitchell Blocker</h4>

            {/* <!-- Quotation --> */}
            <p>
              <i className="fas fa-quote-left"></i> "I am a totally different
              person now than when I signed up 19 months ago. I have found my
              voice and can speak up for myself now....My confidence level is
              also better than it ever has been."
            </p>
          </div>
        </div>
        {/* feedbacks ends */}
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button, Card } from "react-bootstrap";

const Home = () => {
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
            <p>this is the first caption</p>
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
            <p>this is the second caption</p>
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
            <p>this is the third caption</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Carousel ends */}

      {/* Qoute */}
      <Card>
        {/* <Card.Header>Quote</Card.Header> */}
        <Card.Body>
          <blockquote className="blockquote mb-0" style={{ width: "100%" }}>
            <h3>
              “What mental health needs is more sunlight, more candor, and more
              unashamed conversation.”
            </h3>
            <footer className="blockquote-footer"> – Glenn Close</footer>
          </blockquote>
        </Card.Body>
      </Card>

      {/* qoute ends */}

      <br></br>
      <br></br>
      <Button variant="secondary" size="lg" style={{ width: "30%" }}>
        Get Free Counsling NOW !
      </Button>

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
      <div className="row aboutus and contactus">
        <br></br>
        {/* card1 */}
        <Card style={{ width: "50%" }}>
          <Card.Body>
            <Card.Title>
              <h3>Our Mission</h3>
            </Card.Title>

            <Card.Text>
              Making professional counseling accessible, affordable, convenient
              - so anyone who struggles with life’s challenges can get help,
              anytime, anywhere.
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
        {/* card2 */}
        <Card style={{ width: "50%" }}>
          <Card.Body>
            <Card.Title>
              <h3>Contact US</h3>
            </Card.Title>

            <Card.Text>
              SpeakOut 990 Villa Street, Mountain View, CA 94041
              contact@Speakout.com
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </div>
      {/* aboutus and contactus ends here */}
    </div>
  );
};

export default Home;

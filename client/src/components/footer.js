import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="row aboutus and contactus">
        <br></br>
        {/* card1 */}
        <Card style={{ width: "50%", backgroundColor: "grey" }}>
          <Card.Body>
            <Card.Title>
              <h3 className="info">Our Mission</h3>
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
        <Card style={{ width: "50%", backgroundColor: "grey" }}>
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
      {/* Copyright */}
      <div className="footer-copyright text-center py-3">
        <p> © 2020 Copyright:SpeakOut.com</p>
      </div>
    </div>
  );
};

export default Footer;

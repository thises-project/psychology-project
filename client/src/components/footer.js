import React from "react";
import { Card } from "react-bootstrap";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div style={{ backgroundColor: "grey" }}>
        <br></br>
        {/* card1 */}
        <Card style={{ width: "25%", backgroundColor: "teal-500" }}>
          <Card.Body class="text-center">
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
        <Card style={{ width: "25%", backgroundColor: "grey" }}>
          <Card.Body class="text-center">
            <Card.Title>
              <h3>Contact US</h3>
            </Card.Title>

            <Card.Text>
              {/* <p>
                Phone Number <a href="tel:+962 785 200 215">+962 785 200 215</a>
              </p>
              <p>
                Phone Number <a href="tel:+962 785 200 220">+962 785 200 220</a>
              </p> */}
              {/* <br /> */}
              <p></p>
              SpeakOut 990 Villa Street, Mountain View, CA 94041
              contact@Speakout.com
            </Card.Text>
            <div>
              <a href="https://www.facebook.com/">
                <TiSocialFacebookCircular size={40} />
              </a>
              <a href="https://www.instagram.com/">
                <TiSocialInstagramCircular size={40} />
              </a>
              <a href="https://www.linkedin.com/">
                <TiSocialLinkedinCircular size={40} />
              </a>
              <a href="https://twitter.com/?lang=en">
                <TiSocialTwitterCircular size={40} />
              </a>
              <a href="https://www.youtube.com/">
                <TiSocialYoutubeCircular size={40} />
              </a>
            </div>
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

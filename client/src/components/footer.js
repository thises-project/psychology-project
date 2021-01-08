import React from "react";
import { Card } from "react-bootstrap";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div
      className="row"
      style={{ width: "100%", marginLeft: 5, marginRight: 5 }}
    >
      <br />
      <Card border="primary" style={{ width: "50%" }}>
        <Card.Header>
          {" "}
          <h3>Our Mission</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Making professional counseling accessible, affordable, convenient //
            - so anyone who struggles with life’s challenges can get help, //
            anytime, anywhere.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: "50%" }}>
        <Card.Header>
          <h3>Contact US</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <TiSocialFacebookCircular size={40} />
            <TiSocialInstagramCircular size={40} />
            <TiSocialLinkedinCircular size={40} />
            <TiSocialTwitterCircular size={40} />
            <TiSocialYoutubeCircular size={40} />
          </Card.Title>
          <Card.Text>
            SpeakOut 990 Villa Street, Mountain View, CA 94041 //
            contact@Speakout.com
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default Footer;

// <div className="row">
//   <div style={{ width: "100%", backgroundColor: "grey" }}>
//     <br></br>
//     {/* card1 */}
//     <Card className="col" style={{ width: "50%", backgroundColor: "grey" }}>
//       <Card.Body>
//         <Card.Title>
//
//         </Card.Title>

//         <Card.Text>
//
//         </Card.Text>
//       </Card.Body>
//     </Card>
//     {/* card2 */}
//     <Card className="col" style={{ width: "50%", backgroundColor: "grey" }}>
//       <Card.Body>
//         <Card.Title>
//
//         </Card.Title>

//         <Card.Text>
//
//         </Card.Text>
//         <div>
//           <a href="https://www.facebook.com/">
//
//           </a>
//           <a href="https://www.instagram.com/">
//
//           </a>
//           <a href="https://www.linkedin.com/">
//
//           </a>
//           <a href="https://twitter.com/?lang=en">
//
//           </a>
//           <a href="https://www.youtube.com/">
//
//           </a>
//         </div>
//         {/* <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link> */}
//       </Card.Body>
//     </Card>
//   </div>
//   {/* aboutus and contactus ends here */}
//   {/* Copyright */}
//   <div className="footer-copyright text-center py-3">
//     <p> © 2020 Copyright:SpeakOut.com</p>
//   </div>
// </div>

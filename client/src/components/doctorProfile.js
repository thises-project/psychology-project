import React from "react";
// import axios from "axios";
import { Form } from "react-bootstrap";

const DoctorProfile = () => {
  return (
    <div>
      <h6 style={{ fontSize: "18px" }}> Doctor Profile </h6>
      <div className="col ml-auto mr-auto" style={{ width: "50%" }}>
        <Form>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Upload an profile pic"
            />
          </Form.Group>
        </Form>
      </div>
      <div className="col ml-auto mr-auto" style={{ width: "50%" }}>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control size="lg" as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default DoctorProfile;

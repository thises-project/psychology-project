import React from "react";
// import axios from "axios";
import { Form } from "react-bootstrap";

const DoctorProfile = () => {
  return (
    <div className="col ml-auto mr-auto" style={{ textAlign: "left" }}>
      <div>
        <h3> Doctor Profile</h3>
      </div>
      <div className="col ml-auto mr-auto" style={{ width: "50%" }}>
        <Form variant="info">
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
            <Form.Label className="ml-auto mr-auto">Doctor Name</Form.Label>
            <Form.Control size="lg" type="name" placeholder="doctor name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>DoctorSpeciality</Form.Label>
            <Form.Control
              size="lg"
              type="speciality"
              placeholder="doctor speciality"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Bio</Form.Label>
            <Form.Control size="lg" as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default DoctorProfile;

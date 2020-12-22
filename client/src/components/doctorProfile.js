import { React, useState, useEffect } from "react";
import axios from "axios";
// import { Form } from "react-bootstrap";

const DoctorProfile = (props) => {
  const [doctorProfile, setDoctorProfile] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/getOneDoctor/" + props.match.params.id)
      .then((res) => {
        console.log(res.data[0]);
        setDoctorProfile({
          doctorName: res.data[0].doctorName,
          doctorSpeciality: res.data[0].doctorSpeciality,
          bio: res.data[0].bio,
          email: res.data[0].email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);

  return (
    <div>
      <h2> {doctorProfile.doctorName}</h2>
    </div>
    // <div className="col ml-auto mr-auto" style={{ textAlign: "left" }}>
    //   <h3 className="col ml-auto mr-auto" style={{ textAlign: "Center" }}>
    //     {" "}
    //     Doctor Profile
    //   </h3>

    //   <div className="col ml-auto mr-auto" style={{ width: "50%" }}>
    //     <Form variant="info">
    //       <Form.Group>
    //         <Form.File
    //           id="exampleFormControlFile1"
    //           label="Upload an profile pic"
    //         />
    //       </Form.Group>
    //     </Form>
    //   </div>
    //   <div className="col ml-auto mr-auto" style={{ width: "50%" }}>
    //     <Form>
    //       <Form.Group controlId="exampleForm.ControlInput1">
    //         <Form.Label className="ml-auto mr-auto">Doctor Name</Form.Label>
    //         <Form.Control size="lg" type="name" placeholder="doctor name" />
    //       </Form.Group>
    //       <Form.Group controlId="exampleForm.ControlInput1">
    //         <Form.Label>DoctorSpeciality</Form.Label>
    //         <Form.Control
    //           size="lg"
    //           type="speciality"
    //           placeholder="doctor speciality"
    //         />
    //       </Form.Group>
    //       <Form.Group controlId="exampleForm.ControlSelect1">
    //         <Form.Label>Bio</Form.Label>
    //         <Form.Control size="lg" as="textarea" rows={3} />
    //       </Form.Group>
    //     </Form>
    //   </div>
    // </div>
  );
};

export default DoctorProfile;

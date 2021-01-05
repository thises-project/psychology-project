import { React, useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { storage } from "../firebase";

const DoctorProfile = (props) => {
  const [doctorProfile, setDoctorProfile] = useState({});
  const [image, setImage] = useState(null);
  const [firstUrl, setUrl] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/doctor/getOneDoctor/` +
        `${window.localStorage.doctorId}`
      )
      .then((res) => {
        console.log(res.data[0], " kkkkkkkkkkkkkkkkkkkkk");
        setDoctorProfile({
          doctorName: res.data[0].doctorName,
          doctorSpeciality: res.data[0].doctorSpeciality,
          bio: res.data[0].bio,
          email: res.data[0].email,
          password: res.data[0].password,
          imgURL: res.data[0].image,
        });


      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [window.localStorage.doctorId]);

  function onChangeimg(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else console.log("error in onchangeimg");
  }

  function handleUpload(e) {
    e.preventDefault();
    console.log("imageeeeeeeee", image)

    const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => { },
      (error) => {
        console.log(error, "error");
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((firstUrl) => {
            setUrl(firstUrl)
            // console.log(firstUrl, " fiiiiiiiiiiiiiiiiiiiiiiiirts")
            axios.post("http://localhost:5000/doctor/postOneDoctorImage/" + `${window.localStorage.doctorId}`, { firstUrl })
              .then((res) => {
                console.log(res.config.data, " this is a res from post image");
                window.location = "http://localhost:3000/doctorProfile/" + `${window.localStorage.doctorId}`
              })
              .catch((err) => {
                console.log("there is an errrrrrrrooooorrrr", err);
              });
          });
      });

  }

  return (
    <div className="container ml-5 mr-5">
      <div style={{ textAlign: "left" }}>
        <div
          className="row"
          key={doctorProfile.doctorId}

        >
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <div>
                  <img
                    alt="not found"
                    src={
                      doctorProfile.url ||
                      "http://via.placeholder.com/200x200"
                    }
                  />
                </div>
                <h2>{doctorProfile.doctorName} </h2>
                <h4>{doctorProfile.doctorSpeciality}</h4>
                <p className="lead">{doctorProfile.bio}</p>
                <p>
                  <h4>
                    {" "}
                    <span class="badge bg-primary">{doctorProfile.email}</span>
                  </h4>

                  <br></br>
                  <div>
                    <img width="200" height="200" src={doctorProfile.imgURL || "http://via.placeholder.com/200x200"} />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">

          <div class="form-group">
            <label>Add Your Profile Image </label>
            <input
              type="file"

              onChange={onChangeimg}
            />
            <br></br>
            <button onClick={handleUpload}>Upload</button>
            <br />
          </div></div>

        <div className="col mr-5">
          <Link
            to={`/updateDoctor/${window.localStorage.doctorId}`}
            className="btn btn-info "
            style={{ marginLeft: "5px" }}
          >
            Edit
          </Link>
        </div>
        <br />
      </div >
      {/* footer div */}
      < div
        className="container w-100 mt-5 mb-5"
        style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Footer />
      </div >
      {/* footer div ends*/}
    </div >
  );
};

export default DoctorProfile;
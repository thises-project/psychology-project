import { React, useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { storage } from "../firebase";



const DoctorProfile = (props) => {
  const [doctorProfile, setDoctorProfile] = useState({});
  const [image , setImage]= useState(null);
  const [url , setUrl]= useState({});
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/getOneDoctor/" + `${window.localStorage.doctorId}`)
      .then((res) => {
         console.log(res.data[0], " kkkkkkkkkkkkkkkkkkkkk");
        setDoctorProfile({
          doctorName: res.data[0].doctorName,
          doctorSpeciality: res.data[0].doctorSpeciality,
          bio: res.data[0].bio,
          email: res.data[0].email,
          password: res.data[0].password,
          url : res.data[0].image,
        });
       
        //console.log(url,"hiiiiiiiiii")
      })
      .catch((err) => {
        console.log(err);
      });
  }, [window.localStorage.doctorId]);


  function onChangeimg(e) {
       if (e.target.files[0]) {
        setImage(
            e.target.files[0]
        );
       } else console.log("error in onchangeimg");
     
    }

function handleUpload() {

  console.log("imageeeeeeeee",image)
        // e.preventDefault();
        const uploadTask = storage.ref(`/images/${image.name}`).put(image);
        uploadTask.on("state_changed",(snapshot) => {},
          (error) => {
            console.log(error, "error");
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                setUrl(url)
                axios.post("http://localhost:5000/doctor/postOneDoctorImage/" + `${window.localStorage.doctorId}`,{url})
                .then((res) => {
                 // const { url} = res.data;
                   console.log(res.config.data, " this is a res from post image");
                   //const { url } = res.config.data;
                   // empty state
                  //  setUrl(
                  //     {url : res.config.data,}
                  //  );
               
                })
                .catch((err) => {
                  console.log("there is an errrrrrrrooooorrrr",err);
                });     
              });
          });     
         // console.log(url,"hiiiiiiiiii")    
}



  return (
    <div className="container ml-5 mr-5">
      <div style={{ textAlign: "left" }}>
        <div
          className="row"
          key={doctorProfile.doctorId}
          // style={{ borderBottom: "1px solid silver" }}
        >
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <h2>{doctorProfile.doctorName} </h2>
                <h4>{doctorProfile.doctorSpeciality}</h4>
                <p className="lead">{doctorProfile.bio}</p>
                <p>
                  <h4>
                    {" "}
                    <span class="badge bg-primary">{doctorProfile.email}</span>
                  </h4>
                  <br></br>
                  {/* <div>
                  <img src={url} alt="My Profile Image"/>
                  </div> */}
                </p>
              </div>
         
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
         {/* <div class="col-md-4 order-md-2 mb-4"> */}
         {/* <div class="float-md-right"> */}
         <div class="form-group">
              <label>Add Your Profile Image </label>
              <input
                type="file"
                // required="true"
                // className="form-control"
                //value = {image}
                onChange={onChangeimg}
              />
              <br></br>
              <button onClick={handleUpload}>Upload</button>
              <br />
              <img
                src={doctorProfile.url || "http://via.placeholder.com/200x200"}
                alt="Upload-image"
              />
            
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
        <br/>
       
      </div>

      <Footer />
    </div>
  );
};

export default DoctorProfile;








  
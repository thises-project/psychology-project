import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Doctors = (props) => {
  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/getAllDoctors")
      .then((res) => {
        // console.log("HIIIIIII");
        setDoctor(res.data);
      })
      .catch((err) => {
        alert("Error fetching doctors List!");
      });
  });

  return (
    <div className="container ml-5 mr-5" style={{ textAlign: "left" }}>
      {doctors.map((doctor) => (
        <div
          className="row"
          key={doctor.doctorId}
          style={{ borderBottom: "1px solid silver" }}
        >
          <div className="col pt-3 pb-2">
            <div className="row">
              <div className="col-md-10">
                <h2>{doctor.doctorName}</h2>
                <p className="lead">{doctor.bio}</p>
                <p>
                  <span className="badge"> {doctor.email} </span>
                  <span className="badge">{doctor.password} </span>
                </p>
                <Link
                  //'/updateDoctor/:id'
                  to={`/updateDoctor/${doctor.doctorId}`}
                  className="btn btn-info "
                  style={{ marginLeft: "5px" }}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger "
                  style={{ marginLeft: "5px" }}
                  // onClick={() => deleteDoctor(doctor.doctorId)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br></br>
      <br></br>
      <div style={{ textAlign: "center" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Doctors;

// insert into doctors (doctorName, doctorSpeciality, bio, email, password ) VALUES ('Sara Deroo','Relationship issues & Family conflicts', 'Hello! I am a Licensed Clinical Social Worker with over 10 years of experience working as therapist and life coach. I have worked with clients with a wide range of concerns including depression, anxiety, relationship issues, parenting problems, with a special focus in adoption and foster care issues. I also helped many people who have experienced physical trauma or emotional abuse.My counseling style is warm and interactive. I consider the client/therapist relationship to be the most important thing in counseling.I look forward to working with you!','Sara@gmail.com','Sara12345');
// insert into doctors (doctorName, doctorSpeciality, bio, email, password ) VALUES ('Jennifer Ayers','Addictions, Eating and Sleeping disorders', 'Hello I am a Licensed Professional Counselor who has been in the helping profession for over 24 years.The journey has been both personally and professionally rewarding!I have taken a very nontraditional career path over the years from Nursing, Education, Administration, Consulting, and Counseling.My myriad of professional experiences in both the public and private sectors have equipped me with a unique set of skills, a wealth of knowledge, and clinical expertise to aid others in developing life-long wellness.','Jennifer@gmail.com','Jennifer12345');
// insert into doctors (doctorName, doctorSpeciality, bio, email, password ) VALUES ('Steven Abney','Stress & Anxiety','I am a firm believer that a sense of humor is essential in dealing with lifes challenges, and although I take my work and my clients seriously, I never take myself too seriously. Seeking help is difficult enough, and it is my job to make the process easier by offering my clients a warm, empathic, and safe place to address their challenges. If you are struggling with a particular issue, or simply looking for a safe place to express yourself, Iam excited to begin the process with you.','Steven@gmail.com','Steven12345');
// insert into doctors (doctorName, doctorSpeciality, bio, email, password ) VALUES ('Irina Adams',' Depression, Trauma and abuse','Hello, I am a licensed therapist and have worked with individuals, couples and families seeking counseling for over six years. My services include individual and couples’ therapy, pre-marital counseling, assertiveness and career couching. To that end, depression, anxiety, stress and trauma-related disorders, grief/loss, parental skills, relationship improvement, veteran and women’s issues are some of the problems I address in my practice. My treatment style is rooted in psychodynamic and client-centered approaches that focus on building trust and authentic rapport and addressing my client’s unique concerns.','Irina@gmail.com','Irina12345');
// insert into doctors (doctorName, doctorSpeciality, bio, email, password ) VALUES ('Christopher Denzler','Personality Disorders & Phobias','I am Licensed Mental Health Counselor (LMHC) in Indiana. I graduated with my Masters degree in Licensed Professional Counseling from Liberty University in 2013. Since that time, I have worked with children, teens, adults, couples, individuals and families involved with the Department of Child Services and Juvenile Probation. I have worked with trauma, abuse, anxiety, depression, anger, domestic violence, addiction, parent-child relationships, communication problems, grief and loss, personality disorders, et cetera. I am also a Credentialed Sexually Abusive Youths Counselor (CSAYC) since 2017, working with youths, and their families, to address issue with sexually maladaptive behaviors and ensuring safety in the home, community, and school.','Christopher@gmail.com','Christopher12345');
// insert into doctors (doctorName, doctorSpeciality, bio, email, password ) VALUES ('Elisabeth Davis','Career difficulties , Bipolar disorder','I am a Licensed Professional Clinical Counselor. I have been licensed in Kentucky since 1997. I am also licensed in Ohio. I am a Board Certified -TeleMental Health Provider. My professional experience is eclectic and wide ranging. I have worked with a diverse range of populations and issues and I have expertise in areas ranging from anxiety and depression to post traumatic stress disorder. I have worked extensively with trauma from physical and sexual abuse, family and relationship issues, parenting problems and LGBTQ issues. I have significant experience working with the military. I have done education and career counseling.','Elisabeth@gmail.com','Elisabeth12345');
// insert into doctors (doctorName, doctorSpeciality, bio, email, password ) VALUES ('Pamela Frieden','Anger management & Self esteem','Hello! welcome to the BetterHelp community! My name is Pamela Frieden and I am a Licensed Specialist Clinical Social Worker practicing in Kansas. I am also a Licensed Clinical Social Worker in Oklahoma. I have been providing psychotherapy for a wide variety of issues and populations for 20 years. I graduated from Newman University in 2000 with a Master in Social Work and a Minor in Womens Studies. For six years, early in my clinical career, I did in-home family therapy with Juvenile Offenders and their families to help reduce recidivism rates of teens entering the criminal justice system using the Functional Family Therapy Blueprint model. Since 2006, I have been working as an Independent Therapist in private practice and group practice settings.','Pamela@gmail.com','Pamela12345');

// select * from doctors
// DELETE FROM doctors WHERE doctorId=41;

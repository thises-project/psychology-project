import Axios from "axios";
import React, { useEffect, useState } from "react";

import Footer from "./footer";

//use Selector to fetch data from global store
const url = "http://localhost:5000";

function UserQuestionsAnswers() {
  const [questionInfo, setQuestionInfo] = useState({
    questions: [],
  });
  useEffect(() => {
    Axios.get(
      `${url}/questions/getAllQuestionsAndAnswersForOneUser/${window.localStorage.userId}`
    )
      .then((res) => {
        console.log(res.data);
        setQuestionInfo({ questions: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [window.localStorage.userId]);
  return (
    <div>
      <div
        className="container w-100"
        style={{
          textAlign: "left",
          backgroundColor: "beige",
          alignSelf: "center",
          width: "100%",
          height: "auto",
          borderRadius: 5,
          marginBottom: 20,
        }}
      >
        <br />
        <h2>My Questions</h2>
        <div>
          {questionInfo.questions.map((questions) => (
            <ul>
              <br />
              <li
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 5,
                  backgroundColor: "white",
                  fontSize: 14,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                {questions.question}
              </li>
              <li
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 5,
                  backgroundColor: "white",
                  fontSize: 14,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                {questions.answer}
              </li>
              <li
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 5,
                  backgroundColor: "white",
                  fontSize: 14,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                Dr.{questions.doctorName}
              </li>
              <br />
            </ul>
          ))}
        </div>
      </div>

      {/* footer div */}
      <div
        className="container w-100 mt-5 mb-5"
        style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Footer />
      </div>
      {/* footer div ends*/}
    </div>
  );
}

export default UserQuestionsAnswers;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllQuestionsAndAnswers } from "../actions/AddQuestion";
import Footer from "./footer";
import { FaCommentMedical } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

function QuestionsList() {
  const dispatch = useDispatch();
  const questionAndAnswersList = useSelector(
    (state) => state.GetAllQuestionsAndAnswers
  );
  console.log(questionAndAnswersList);

  useEffect(() => {
    dispatch(GetAllQuestionsAndAnswers());
  }, [dispatch]);

  return (
    <div>
      <div
        className="container w-100"
        style={{
          textAlign: "left",
          backgroundColor: "beige",
          alignSelf: "center",
          width: "100%",
        }}
      >
        <h2 style={{ marginLeft: 15, marginRight: 10, marginTop: 20 }}>
          {" "}
          Recent SpeakOut's
        </h2>

        {questionAndAnswersList.map((questions) => (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "blue",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            {/* user */}
            <div
              className="container"
              style={{
                marginLeft: 15,
                marginRight: 10,
                marginTop: 25,
                fontSize: 14,
                height: "auto",
              }}
            >
              <FaCommentDots style={{ marginRight: 20 }} size={25} />
              User: {questions.question}
            </div>
            {/* doctor */}
            <div
              className="container"
              style={{
                marginLeft: 15,
                marginRight: 10,
                marginBottom: 25,
                marginTop: 10,
                fontSize: 14,
                height: "auto",
              }}
            >
              <FaCommentMedical style={{ marginRight: 20 }} size={25} />
              Dr. {questions.doctorName}: {questions.answer}
            </div>
          </div>
        ))}
        <br />

        <br />
      </div>
      <br />
      <br />

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

export default QuestionsList;

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddQuestions } from "../actions/AddQuestion";
import { Button } from "react-bootstrap";
import Footer from "./footer";

function AddQ() {
  const [questions, setQuestion] = useState({
    question: "",
    user_Id: window.localStorage.userId,
    questionType: "Individual Counseling",
  });

  // const { question, questionType } = questions;

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setQuestion((questions) => ({ ...questions, [name]: value }));
  }

  function handleSubmit(e) {
    // console.log(questions);
    e.preventDefault();
    dispatch(AddQuestions(questions));
    window.location = "/questions";
  }

  return (
    <div
      className="container w-100"
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <div
        className="container w-100"
        style={{
          textAlign: "left",
          backgroundColor: "beige",
          alignSelf: "center",
          width: "100%",
          height: "auto",
          borderRadius: 5,
        }}
      >
        <br />
        <br />
        <h3>WE ARE HERE FOR YOU ..</h3>
        <h3>How can we help you ?</h3>

        <form
          onSubmit={handleSubmit}
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <label>Choose Counseling Type ..</label>
          <br />
          <select
            name="questionType"
            onChange={handleChange}
            value={questions.questionType}
          >
            <option value="Teenager Counseling"> Teenager Counseling </option>
            <option value="Couple Counseling"> Couple Counseling </option>
            <option value="Individual Counseling">
              {" "}
              Individual Counseling{" "}
            </option>
          </select>
          <br />
          <textarea
            style={{ width: 900, height: "auto" }}
            type="text"
            name="question"
            value={questions.question}
            onChange={handleChange}
          />
          <br />

          <Button
            className="button"
            type="submit"
            size="lg"
            style={{ width: "auto", marginTop: 30, height: 30 }}
          >
            SpeakOut
          </Button>
          <br />
          <br />
          <br />
          <h6> one of our doctors will reply you soon</h6>
        </form>
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
    </div>
  );
}
export default AddQ;

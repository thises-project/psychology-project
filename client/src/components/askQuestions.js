import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddQuestions } from "../actions/AddQuestion";
import { Button } from "react-bootstrap";
import Footer from "./footer";

// build ask question component
// take the input value

function AddQ() {
  const [questions, setQuestion] = useState({
    question: "",
    user_Id: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    setQuestion({
      question: e.target.value,
      user_Id: window.localStorage.userId,
    });
  }

  function handleSubmit(e) {
    console.log(questions);
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
          <textarea
            style={{ width: 900, height: "auto" }}
            type="text"
            name="question"
            value={questions.question}
            onChange={handleChange}
          />

          <Button
            type="submi"
            variant="info"
            size="lg"
            style={{ width: "10%", marginTop: 30, width: 50, height: 30 }}
          >
            Ask ..
          </Button>
        </form>
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
export default AddQ;

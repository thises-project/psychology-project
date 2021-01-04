import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AddQuestions } from '../actions/AddQuestion';
import { Button } from "react-bootstrap";
import { Dropdown } from 'react-bootstrap';


// build ask question component
// take the input value

function AddQ() {

  const [questions, setQuestion] = useState({
    question: '',
    user_Id: window.localStorage.userId,
    questionType: 'Individual Counseling',
  });

  const { question, questionType } = questions;

  const dispatch = useDispatch();


  function handleChange(e) {
    const { name, value } = e.target;
    setQuestion(questions => ({ ...questions, [name]: value }));

  }

  function handleSubmit(e) {
    // console.log(questions);
    e.preventDefault();
    dispatch(AddQuestions(questions))
    window.location = '/questions'
  }

  return (
    <div >
      <h3>WE ARE HERE FOR YOU ..</h3>
      <h3>How can we help you ?</h3>

      <form onSubmit={handleSubmit}>

        {/* <Dropdown name="questionType" onChange={handleChange} value={questions.questionType}>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Choose Counseling Type ..
                </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item value="Teenager Counseling" > Teenager Counseling </Dropdown.Item>
            <Dropdown.Item value="Couple Counseling" > Couple Counseling </Dropdown.Item>
            <Dropdown.Item value="Individual Counseling" > Individual Counseling </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <label>Choose Counseling Type ..</label><br />
        <select name="questionType" onChange={handleChange} value={questions.questionType} >
          <option value="Teenager Counseling" > Teenager Counseling </option>
          <option value="Couple Counseling" > Couple Counseling </option>
          <option value="Individual Counseling" > Individual Counseling </option>
        </select>
        <br />
        <textarea
          rows="7"
          cols="100"
          type="text"
          name="question"
          value={questions.question}
          onChange={handleChange}
        />
        <br />

        <Button type="submi" variant="info" size="lg" style={{ width: "10%" }}>
          Ask ..
          </Button>

      </form>
    </div>
  );
}
export default AddQ;
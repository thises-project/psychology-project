import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AddQuestions } from '../actions/AddQuestion';
import { Button } from "react-bootstrap";

// build ask question component
// take the input value
function AddQ() {
  const [questions, setQuestion] = useState({
    question: '',
    user_Id :'',
  });
  const dispatch = useDispatch();
  function handleChange(e) {
    // const { name, value } = e.target;
    // // console.log(e.target.value)
    // setQuestion(questions => ({ ...questions, [name]: value }));
    setQuestion ({question : e.target.value
      , user_Id : window.localStorage.userId});
  }
  function handleSubmit(e) {
    console.log(questions)
    e.preventDefault();
    dispatch(AddQuestions(questions))
    window.location = '/questions'
  }
  return (
    <div >
      <h3>WE ARE HERE FOR YOU ..</h3>
      <h3>How can we help you ?</h3>
      <form onSubmit={handleSubmit}>
        {/* <input type="text"  name="question" value={questions.question} onChange={handleChange} />
        <button type="submi"> ASK </button> */}
        <textarea rows="7" cols="100" type="text"  name="question" value={questions.question} onChange={handleChange} />
        <br/>
        <Button type="submi" variant="info" size="lg" style={{ width: "10%" }}>
         Ask ..
      </Button>
      </form>
    </div>
  );
}
export default AddQ;
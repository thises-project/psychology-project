import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { AddQuestions } from '../actions/AddQuestion';
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
      <p>WE ARE HERE FOR YOU ..</p>
      <p>How can we help you ?</p>
      <form onSubmit={handleSubmit}>
        <input type="text"  name="question" value={questions.question} onChange={handleChange} />
        <button type="submi"> ASK </button>
      </form>
    </div>
  );
}
export default AddQ;
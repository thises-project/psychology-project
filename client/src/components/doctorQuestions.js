// CREATE ANSWER IS PUSHED FINALY ...


import React, { useEffect } from 'react';
import { useState } from "react";
import { GetQuestions } from '.././actions/AddQuestion';
import { createAnswer } from '../actions/AddQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";

// Render All Questions With Textarea For Doctors To answer ..
// Take the value From Input Field ..

function DoctorQuestions() {
    // Get All Questions ..
    const dispatch = useDispatch();
    const AddQuestion = useSelector((state) => state.AddQuestions);

    useEffect(() => {
        dispatch(GetQuestions())
    }, [dispatch]);
    // console.log(AddQuestion)
    // Take The Input Value ..
    const [answers, setAnswer] = useState({
        answer: '',
        questionId: ''
    });

    function handleChange(e) {
        // const {name, value} = e.target;
        // setAnswer(answers => ({ ...answers, [name]: value}));

        //Nour
        setAnswer({ answer : e.target.value ,
        questionId : e.target.name });
        console.log(answers, "from component");

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(AddQuestion);
        // console.log(e.target.value);
        // console.log(AddQuestion.question_Id)

        dispatch(createAnswer(answers))
        window.location = '/questions'
    }

    return (
        <div>
            <h2>Doctor Questions Page</h2>

            {AddQuestion.map((question, index) => (
                <div key ={index}>
                    <ul >
                        <li>{question.question}</li>
                        <li>{question.questionId}</li>

                        <br />
                        <form onSubmit={handleSubmit}>
                            <textarea rows="4" cols="50" name={question.questionId} key={index} value={answers.answer} onChange={handleChange} />
                            <br/>

                            <Button type='submit' variant="info" style={{ width: "8%" }}>Reply</Button>
                        </form><br />
                    </ul>
                </div>
            ))}

        </div>
    )
}

export default DoctorQuestions;
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
    console.log(AddQuestion)
    // Take The Input Value ..
    const [answers, setAnswer] = useState({
        answer: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setAnswer(answers => ({ ...answers, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createAnswer(answers))
    }

    return (
        <div>
            <h2>Doctor Questions Page</h2>

            {AddQuestion.map((question, index) => (
                <li >{question.question}

                    <br />
                    <form onSubmit={handleSubmit}>
                        <textarea key={index} rows="4" cols="50" name="answer" value={answers.answer} onChange={handleChange} />
                        <br />
                        
                        <Button type='submit' variant="info" style={{ width: "5%" }}>Reply</Button>
                    </form><br />
                </li>
            ))}

        </div>
    )
}

export default DoctorQuestions;
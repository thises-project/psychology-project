import React, { useEffect } from 'react';
import { GetQuestions } from '.././actions/AddQuestion';
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
     
    // Take The Input Value ..
    
    return (
        <div>
            <h2>Doctor Questions Page</h2>

            {AddQuestion.map((question) => (
                <li>{question.question}
                    <br />
                    <textarea rows="4" cols="50" />
                    <br />
                    <Button variant="info" style={{ width: "5%" }}>Reply</Button>
                    <br />
                </li>
            ))}

        </div>
    )
}

export default DoctorQuestions;
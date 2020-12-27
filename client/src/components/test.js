import React, { useEffect } from 'react';
// import { useState } from "react";
//use Selector to fetch data from global store 
import { useDispatch ,useSelector} from 'react-redux';
import {GetAllQuestionsAndAnswers} from "../actions/AddQuestion"



function QuestionsList (){

const dispatch = useDispatch();
// use selector to get access to all global store or all gllobal state  
const questionAndAnswersList = useSelector((state) => state.GetAllQuestionsAndAnswers)
console.log(questionAndAnswersList)

useEffect(()=>{
        dispatch(GetAllQuestionsAndAnswers())
        },[dispatch])
    return (
        <div className = "containe"

        >
            <h1>Questions</h1>

            {questionAndAnswersList.map((questions) =>(
                  <div className="questionList" >
                        <h3 className="list-group-item question">{questions.question}</h3> 
                        <h3 className="list-group-item answer">{ questions.answer}</h3> 
                        <h5 className="list-group-item Dr">Dr. {questions.doctorName}</h5> 
                 </div>
               
                   
                   
                    
                    
                ))}
                
        </div>
    )
}

export default  QuestionsList;
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
        <div>
            <h2>Questions</h2>

            {questionAndAnswersList.map((questions) =>(
                   <ul>
                        <li>{questions.question}</li> 
                        <li>{ questions.answer}</li> 
                        <li>{questions.doctorName}</li> 

                   </ul>
                   
                   
                    
                    
                ))}
                
        </div>
    )
}

export default  QuestionsList;
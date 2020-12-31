import React, { useEffect } from 'react';
// import { useState } from "react";
//use Selector to fetch data from global store 
import { useDispatch ,useSelector} from 'react-redux';
import {GetAllQuestionsAndAnswers} from "../actions/AddQuestion"



function Notification (){
var userId = window.localStorage.userId;
const dispatch = useDispatch();
// use selector to get access to all global store or all gllobal state  
const questionAndAnswersList = useSelector((state) => state.GetAllQuestionsAndAnswers)
console.log(questionAndAnswersList)

useEffect(()=>{
        dispatch(GetAllQuestionsAndAnswers())
        },[dispatch]);

        
// onSearch = e => {
//     const {questionAndAnswersList} = this.state
//     const search = e.target.value
//     if(search.length > 0){
//         const filterQuestions = questionAndAnswersList.filter(Question => Question.question.includes(search))
        

//     }
// }        
    return (
        <div className = "containe"

        >
            <h1>Notification</h1>

            {questionAndAnswersList.filter(questions => window.localStorage.user_Id = questions.user_Id).map(filterQuestion=>(
  
                  <div className="questionList" >
                        <h5 className="list-group-item Dr">Dr. {filterQuestion.doctorName}</h5> 
                        <h5>{filterQuestion.user_Id}</h5>
                        <h5>{window.localStorage.user_Id}</h5>  
                        <h5>answered your question</h5>
                 </div>
               
                   
                   
                    
                    
                ))}
                
        </div>
    )
}

export default  Notification;
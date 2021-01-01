import React, { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {GetAllQuestionsAndAnswers} from "../actions/AddQuestion";

function Notification (){
        const dispatch = useDispatch();
        // use selector to get access to all global store or all gllobal state  
        const questionAndAnswersList = useSelector((state) => state.GetAllQuestionsAndAnswers)
        useEffect(()=>{
                dispatch(GetAllQuestionsAndAnswers())
                },[dispatch]);
            return (
                <div>
                    <select >
                        {questionAndAnswersList.filter(questions => window.localStorage.user_Id = questions.user_Id).map(filterQuestion=>( 
                        <option >
                        Dr. {filterQuestion.doctorName}  answered your question
                        </option>
                        ))}
                    </select>          
                </div>
            )
}

export default  Notification;
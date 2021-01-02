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
                    <div >
                        {questionAndAnswersList.filter(questions => window.localStorage.user_Id = questions.user_Id).map(filterQuestion=>( 
                        <p>
                        Dr. {filterQuestion.doctorName}  answered your question {filterQuestion.question}
                     </p>
                        ))}
                    </div>          
                </div>
            )
}

export default  Notification;
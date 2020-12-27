import React, { useEffect } from 'react';
//use Selector to fetch data from global store 
import { useDispatch ,useSelector} from 'react-redux';
import {getUserQuestionsAnswers} from "../actions/AddQuestion"


function UserQuestionsAnswers (){

    const dispatch = useDispatch();
   
        return (
            <div>
                <h2>User Questions Answers</h2>
    
                {/* {getUserQuestionsAnswers.map((questions) =>(
                       <ul>
                            <li>{questions.question}</li> 
                            <li>{ questions.answer}</li> 
                            <li>{questions.doctorName}</li> 
    
                       </ul>
                       
                       
                        
                        
                    ))} */}
                    
            </div>
        )
    }
    
    export default  UserQuestionsAnswers;
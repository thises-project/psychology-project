// import { AddQuestions } from '../'
// import questions from '../../../server/app/controller/questions.js';
// import { AddQuestions, GetAllQuestions } from '../'
import * as api from '../api/index.js'
// import axios from 'axios';

// Create question
export const AddQuestions = (questions) => async (dispatch)=>{
    try {
        // console.log('success')
      const {data} = await api.AddQuestions(questions);
      dispatch({type :'AddQuestions' , payload: data})
        
    }
    catch(error){
        console.log(error,'failed')
    }
}

// Get all question 

export const GetQuestions = () => async (dispatch)=>{
    try {
      const {data} = await api.GetQuestions();
      
      dispatch({type :'GetAllQuestions' , payload: data});
        console.log(data);
    }
    catch(error){
        console.log(error.message);
    }
}
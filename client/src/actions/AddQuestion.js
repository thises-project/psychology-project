// import { AddQuestions } from '../'
// import questions from '../../../server/app/controller/questions.js';
import * as api from '../api/index.js'

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

// export const GetQuestions = () => async (dispatch)=>{
//     try {
//       const {data} = await api.GetQuestions();
//       dispatch({type :'GetAllQuestions' , payload: data})
        
//     }
//     catch(error){
//         console.log(error,'failed')
//     }
// }
import * as api from '../api/index.js'
//Action Creators 
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


import * as api from '../api/index.js'

//Action Creators 
export const AddQuestions = (question) => async (dispatch)=>{
    try {
        console.log('success')
      const {data} = await api.AddQuestions(user);
      dispatch({type :'AddQuestions' , payload: data})
        
    }
    catch(error){
        console.log('failed')
        console.log(error)
    }
}

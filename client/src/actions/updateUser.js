import * as api from '../api/index'



export const updateUser = (id, editUser) => async(dispatch) => {
    try {
      
         const {data} = await api.updateUser(id, editUser); //data=response from server
         dispatch({type :'UPDATE' , payload: data});
        console.log(data, "rrrrrrrrrrrrr")
    }
    catch(err){
        console.log(err);
    }
}
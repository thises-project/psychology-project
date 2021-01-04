import * as api from '../api/index'

export const Adduser = (user) => async (dispatch)=>{
    try {
        console.log('success user :' , user)
      const {data} = await api.Adduser(user);
      
      console.log('returnnnnnnn', data) 
      window.localStorage.setItem("type", data.type);
      dispatch({type :'Adduser' , payload: data})
     
    }
    catch(error){
        console.log('failed')
        console.log(error)
    }
 //   const action = { type : ' '}
}

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

export const deleteUser = (id) => async(dispatch) => {
    try {
        await api.deleteUser(id);
        dispatch({ type: 'DELETE', payload: id})
        window.localStorage.clear();
    } catch (error) {
        console.log(error)
    }
}


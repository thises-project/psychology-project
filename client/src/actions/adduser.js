
import * as api from '../api/index.js'

export const Adduser = (user) => async (dispatch)=>{
    try {
        console.log('success')
      const {data} = await api.Adduser(user);
      dispatch({type :'Adduser' , payload: data})
        
    }
    catch(error){
        console.log('failed')
        console.log(error)
    }
    const action = { type : ' '}
}


// const {data} = await axios
// .post("http://localhost:5000/user/createUser", user)
// .then((response) => {
//   console.log(response, "You saved in db");
  
// })
// .catch((err) => alert("you didn't save in db"));
import * as api from '../api/index.js'



import {Auth} from './Auth.js';

export const verifyUser = (inputs) =>  async (dispatch) => {


    try {
        console.log('success to verifyUser :', inputs)
        const { data } = await api.verifyUser(inputs);

        console.log(data, 'returnnnnnnn from verifyUser ')
        if (data !== "User doesn't exist") {
            window.localStorage.setItem("username", data.username);
            window.localStorage.setItem("userId", data.userId);
            dispatch({ type: 'verifyUser', payload: data })
            dispatch(Auth(data))

            window.location = "/userPro/:" + `${window.localStorage.userId}`;
        } else {
            alert("User Doesn't Exist");
        }

    }
    catch (error) {
        console.log('failed to verify')
        console.log(error)
        alert("Wrong Password");


    }



    }


        
  


}


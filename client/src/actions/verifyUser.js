import * as api from '../api/index.js'


import {Auth} from './Auth.js';

export const verifyUser = (inputs) =>  async (dispatch) => {

    try {
        console.log('success to verifyUser :', inputs)
        const { data } = await api.verifyUser(inputs);

        console.log(data, 'returnnnnnnn from verifyUser ')
        dispatch({ type: 'verifyUser', payload: data })
        dispatch(Auth(data)) 
       
    }
    catch (error) {
        console.log('failed to verify')
        console.log(error)
        alert("Wrong Password");


    }


        
  

}


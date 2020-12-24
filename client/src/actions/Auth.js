import * as api from '../api/index';
//import {Auth} from './Auth.js';

export const Auth = (authInputs) => async (dispatch) => {
    try {
        console.log('success to auth :', authInputs)
        const { data } = await api.Auth(authInputs);

        console.log(data, 'returnnnnnnn from auth ')
        dispatch({ type: 'Auth', payload: data })
        window.localStorage.setItem("token", data);
        console.log("daaaaaaattttttaaaa", data)
        window.location = "/userPro/:id";
    }
    catch (error) {
        console.log('failed to Auth')
        console.log(error)
    }

}
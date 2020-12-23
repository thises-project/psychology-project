import axios from 'axios';

const url = 'http://localhost:5000';

// export const fetchPosts = () => axios.get(url);
export const Adduser = (user) => axios.post(url + '/users/createUser', user);
export const verifyUser = (inputs) => axios.post(url + '/users/verifyUser', inputs);
export const Auth = (authInputs) => axios.post(url + '/users/authUser', authInputs);

// export  const Adduser = (user) => axios.post(url+'/users/createUser', user);


// Add question 
export const AddQuestions = (question) => axios.post(url + '/questions/createQuestion', question);

// Get all queations
export const GetQuestions = (data) => axios.get(url + '/questions/getAllQuestions');

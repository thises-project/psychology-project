import axios from 'axios';

const url = 'http://localhost:5000';


export  const Adduser = (user) => axios.post(url+'/users/createUser', user);
export  const verifyUser = (inputs) => axios.post(url+'/users/verifyUser', inputs);
export  const Auth = (authInputs) => axios.post(url+'/users/authUser', authInputs);
export const updateUser = (id, editUser) => axios.patch(url+ '/users/updateUser/'+id , editUser);
//deleting user profile 
export const deleteUser = (id) => axios.delete(url+ '/users/deleteUser/'+id);



// Add question 
export const AddQuestions = (question) => axios.post(url + '/questions/createQuestion', question);
// Get all queations
export const GetQuestions = (data) => axios.get(url + '/questions/getAllQuestions');
// Send An Answer ..
export const createAnswer = (answers) => axios.post(url + '/questions/createAnswer', answers);

export const GetAllQuestionsAndAnswers = (data) => axios.get(url + '/questions/GetAllQuestionsAndAnswers');

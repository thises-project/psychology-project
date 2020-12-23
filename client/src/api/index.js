import axios from 'axios';
const url = 'http://localhost:5000';
// export const fetchPosts = () => axios.get(url);
export  const Adduser = (user) => axios.post(url+'/users/createUser', user);
export const AddQuestions = (question) => axios.post(url+'/questions/createQuestion',question);

// Get all queations
export  const GetQuestions = (data) => axios.get(url+'/questions/getAllQuestions' );
export  const GetAllQuestionsAndAnswers = (data) => axios.get(url+'/questions/GetAllQuestionsAndAnswers' );

import axios from 'axios';
const url = 'http://localhost:5000';
// export const fetchPosts = () => axios.get(url);
export  const Adduser = (user) => axios.post(url+'/users/createUser', user);
export const AddQuestions = (question) => axios.post(url+'/questions/createQuestion',question);
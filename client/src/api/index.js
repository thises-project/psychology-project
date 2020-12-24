import axios from 'axios';

const url = 'http://localhost:5000';

// export const fetchPosts = () => axios.get(url);
export  const Adduser = (user) => axios.post(url+'/users/createUser', user);

export const updateUser = (id, updatedUser) => axios.patch(url+ '/users/updateUser/'+id , updatedUser);

//export const getOneUser = (id, getOneUser) => axios.get(url+ `/users/getOneUser/${id}`, getOneUser);
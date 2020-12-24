import React, { useState, useEffect } from "react";
import {updateUser} from '../actions/adduser' 
import { useDispatch, useSelector}  from 'react-redux';
import axios from 'axios'

export default function EditUser (props, { currentId, setCurrentId }) {

   // console.log(props)

    const [user, setUser] = useState({
        userName:'',
        age:'',
        gender:'',
        email:'',
        password:''

    })


    useEffect(() =>{
         
        axios.get('http://localhost:5000/users/getOneUser/'+props.match.params.id)

        .then(res => {
        //console.log(res.data[0])
             
           setUser(
                 {userName:res.data[0].userName,
                age:res.data[0].age,
                gender:res.data[0].gender,
                email:res.data[0].email,
                }

            )
        })
        .catch(err => {
            console.log(err)
        })
     }, [props.match.params.id])


    const [submitted] = useState(false);

    const dispatch = useDispatch();
    
    const clear = () => {
      
        setUser({  userName: '',
        age: '',
        gender: '',
        email : '',
        password: '' });
      };


      function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        
          e.preventDefault();
             var currentId = props.match.params.id
          if(currentId){
              console.log(currentId, "kkkkkkkk")
              dispatch(updateUser(currentId, user))
              clear();
          }
             
          window.location = "/userPro/"+props.match.params.id

      }
     
    return (
        <div className="col-lg-8 offset-lg-2">
             <h2>Edit Your Information </h2>
             <form name="form" onSubmit = {handleSubmit}> 
                 <div className="form-group">
                     <label>Username</label>
                    <input type="text" name="userName" value={user.userName} onChange={handleChange} className={'form-control' + (submitted && !user.userName ? ' is-invalid' : '')}  />
                    {submitted && !user.userName &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>age</label>
                    <input type="text" name="age" value={user.age} onChange={handleChange}  className={'form-control' + (submitted && !user.age ? ' is-invalid' : '')}/>
                    {submitted && !user.age &&
                        <div className="invalid-feedback">Age is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>gender</label>
                    <input type="text" name="gender" value={user.gender} onChange={handleChange}  className={'form-control' + (submitted && !user.gender ? ' is-invalid' : '')}/>
                    {submitted && !user.gender &&
                            <div className="invalid-feedback">gender is required</div>
                    }
                </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={user.email} onChange={handleChange}  className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')}/>
                        {submitted && !user.email &&
                             <div className="invalid-feedback">Email is required</div>
                       }
                 </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange}  className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}/>
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary" >
                        {/* {registering && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                        Edit
                    </button>
                    {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
                </div>
            </form>
        </div>
    );
}
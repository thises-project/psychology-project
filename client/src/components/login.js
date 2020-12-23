
import axios from 'axios';
import React from 'react';

import { useEffect, useState } from "react";

import { Link, useLocation } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import user from '../reducers/Adduser';
//import {loggedUser} from '../actions/loggedUser'; 
import { verifyUser } from '../actions/verifyUser';


function Login() {

    const [inputs, setInputs] = useState({
        userName: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const { userName, password } = inputs;
    // const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputs)
        dispatch(verifyUser(inputs))
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="userName" value={userName} onChange={handleChange} className={'form-control' + (submitted && !userName ? ' is-invalid' : '')} />
                    {submitted && !userName &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {/* {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                        Login
                    </button>
                    <Link to="/signup" className="btn btn-link">Sign Up</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;

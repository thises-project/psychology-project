
import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verifyUser } from '../actions/verifyUser';


function Login() {

    const [inputs, setInputs] = useState({
        userName: '',
        password: '',
        usernameError: '',
        passwordError: ''
    });

    // const [submitted, setSubmitted] = useState(false);

    const [submitted] = useState(false);
    const { userName, password } = inputs;
    // const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(inputs)
        if (validate() === true) {
            dispatch(verifyUser(inputs))

        }
    }


    function validate() {
        let usernameError = "";
        let passwordError = "";

        if (!inputs.userName) {
            usernameError =
                "your username cannot be blank!";
        }

        if (!inputs.password) {
            passwordError =
                "your password cannot be blank!";
        }

        if (usernameError || passwordError) {
            setInputs({ usernameError, passwordError });
            return false;
        }
        return true;
    };



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
                <div style={{ color: "red" }}>{inputs.usernameError}</div>
                <br></br>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div style={{ color: "red" }}>{inputs.passwordError}</div>
                <br></br>
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

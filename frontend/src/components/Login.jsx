import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { SnackbarContent, enqueueSnackbar, useSnackbar } from 'notistack';


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    console.log("Login Success");
                    enqueueSnackbar('Login successful', {variant:'success', style: {
                        backgroundColor: '#6ee7b7',
                        color: 'black',
                      }});
                    navigate('/home');
                } else {
                    enqueueSnackbar('Incorrect password! Please try again.', {variant:'success', style: {
                        backgroundColor: '#dc2626',
                        color: 'black',
                      }});
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='login-container'>
            <div className='login-nondeco'>
                <div className="login-wrapper">
                    <div className="login-box">
                        <h1>LOGIN</h1>
                        <form onSubmit={handleSubmit} className='login-form'>
                            <div className='form-inputs'>
                                <div className="input-labels">
                                    <label htmlFor="exampleInputEmail1" className="">
                                        <strong>Email Id</strong>
                                    </label>
                                    <label htmlFor="exampleInputPassword1" className="">
                                        <strong>Password</strong>
                                    </label>
                                </div>

                                <div className="inputs">
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        id="exampleInputEmail1"
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        id="exampleInputPassword1"
                                        onChange={(event) => setPassword(event.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <button type="submit" className="login-button">LOGIN</button>
                        </form>
                        <h3>Don't have an account?</h3>
                        <Link to='/register'><button className="register-button">REGISTER</button></Link>
                    </div>
                </div>
            </div>
            <div className='login-deco'></div>
        </div>
    );
};

export default Login;

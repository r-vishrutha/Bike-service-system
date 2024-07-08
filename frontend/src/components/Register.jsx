// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                }
                else {
                    alert("Registered successfully! Please Login to proceed.")
                    navigate('/login');
                }

            })
            .catch(err => console.log(err));
    }


    return (
        <div className='register-container'>
            <div className='register-deco'></div>
            <div className='register-nondeco'><div className="register-wrapper">
                <div className="register-box">
                    <h1>REGISTER</h1>
                    <form onSubmit={handleSubmit} className='registration-form'>
                        <div className='form-inputs'>
                        <div className="input-labels">
                            <label htmlFor="exampleInputName" className="">
                                <strong>Name</strong>
                            </label>
                            <label htmlFor="exampleInputEmail1" className="">
                                <strong>Email Id</strong>
                            </label>
                            <label htmlFor="exampleInputPassword1" className="">
                                <strong>Password</strong>
                            </label> 
                        </div>

                        <div className="inputs">
                            <input
                                type="text"
                                placeholder="Enter Name"
                                id="exampleInputName"
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
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
                        <button type="submit" className="register-btn">REGISTER</button>
                    </form>

                    <h3 className=''>Already have an account ?</h3>
                    <Link to='/login'><button className="login-btn">LOGIN</button></Link>
                </div>
            </div></div>
        </div>
    );
};

export default Register;
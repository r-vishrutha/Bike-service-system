import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FirstStep.css';

const FirstStep = () => {
    const [fullname, setFullName] = useState('');
    const [emailid, setEmailid] = useState('');
    const [model, setModel] = useState('');
    const [service, setService] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/firststep', { fullname, emailid, model, service })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("You are already registered");
                    navigate('/Home');
                }
                else {
                    alert("Registered successfully! ");
                    navigate('/Home');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="first-step-container">
            <div className="first-step-wrapper">
                <div className="first-step-box">
                    <h2 className='mb-3 text-primary'>Register For Service</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputName" className="form-label">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Full Name"
                                className="form-control"
                                id="exampleInputName"
                                onChange={(event) => setFullName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail" className="form-label">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="exampleInputEmail"
                                onChange={(event) => setEmailid(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputModel" className="form-label">
                                <strong>Bike Model</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Bike Model"
                                className="form-control"
                                id="exampleInputModel"
                                onChange={(event) => setModel(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputService" className="form-label">
                                <strong>Service</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Service"
                                className="form-control"
                                id="exampleInputService"
                                onChange={(event) => setService(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FirstStep;

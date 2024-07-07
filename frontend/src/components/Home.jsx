import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h1>MOTOBIKES <span><h5>Revitalize Your Ride</h5></span></h1>
        <p>Welcome to our bike service center! We're here to ensure that your two-wheeled companion receives the care and attention it deserves. Whether you're in need of a routine check-up, repairs, or a complete overhaul, our team of experienced technicians is ready to provide top-notch service.</p>
      </div>
      <div className='offered-services'>
        <h3>We offer:</h3>
        <div className="services-box">
            <div className='services'>General Services</div>
            <div className='services'>Oil Change</div>
            <div className='services'>Water Wash</div>
        </div>
      </div>

      <Link to='/FirstStep' className="button">Service Registration</Link>
      <Link to='/States' className="button">Service Table</Link>
    </div>
  );
};

export default Home;

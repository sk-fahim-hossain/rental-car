import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login')
    }
    const handleRegister = event =>{
        event.preventDefault();
        console.log("Click")
    }
    return (
        <div className="container register-form">
            <h2 style={{textAlign:'center'}} className="mt-3 text-primary">Please register first</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder="Enter Your Name" />
                <input type="email" name="email" id="" placeholder="Enter Your Email" />
                <input type="password" name="password" id=""  placeholder="Enter Your password"/>
                <input type="submit" value="Register" />
            </form>
            <p>New to Rental Car? <Link to="/register" className="text-danger text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;
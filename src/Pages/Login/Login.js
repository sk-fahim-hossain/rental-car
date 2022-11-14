import { sendEmailVerification } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from './../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from './../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
       

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate('/')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }
     
    const navigateRegister = event =>{
        navigate('/register')
    }

    const handleResetPassword = async (event) =>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('sent email');
        }
        else{
            toast('enter email');
        }
        
      
    }

    return (
        <div className="container">
            <ToastContainer />
            <Form onSubmit={handleSubmit} className="w-50 mx-auto" >
                <h2 className="my-3">Please Login </h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="Login">
                   Login
                </Button>
                <p>New to Rental Car? <Link to="/register" className="text-primary text-decoration-none" onClick={navigateRegister}>Please Register</Link></p>
                <p>Forgot password ? <button  className="btn btn-link text-decoration-none text-primary " onClick={handleResetPassword}>Reset password</button></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
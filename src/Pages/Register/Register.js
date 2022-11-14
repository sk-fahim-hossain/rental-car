import React, { useRef, useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {useSendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        navigate('/')
       console.log('user',user)
    }
    const navigateLogin = event => {
        navigate('/login')
    }
    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

       
        await createUserWithEmailAndPassword(email,password);
        updateProfile({ displayName : name });
          console.log('Updated profile');
    }
    
    return (
        <div className="container register-form mx-auto">
            <h2 style={{textAlign:'center'}} className="mt-3 text-primary">Please register first</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" ref={nameRef} id="" className="  w-50 mx-auto" placeholder="Enter Your Name" />
                <input type="email" name="email" ref={emailRef} id="" className=" w-50 mx-auto" placeholder="Enter Your Email" />
                <input type="password" name="password" ref={passwordRef} className=" w-50 mx-auto" id=""  placeholder="Enter Your password"/>
                <div className="mx-auto  w-50">
                <input onClick={()=>setAgree(!agree)}  type="checkbox" name="term" id="term" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="term">Accept Rental Car terms and conditions</label>
                </div>
                <input disabled={!agree} type="submit" value="Register" className="btn btn-primary w-50 mx-auto m-2"/>
            </form>
            <p className=" w-50 mx-auto">Already have an account? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
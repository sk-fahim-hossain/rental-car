import React from 'react';
import google from '../../../images/social/google.png';
import fb from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import auth from './../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error1) {
        errorElement = <div>
            <p>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if(user || user1){
        navigate('/')
    }
    return (
        <div className="container w-50">
            <div className="d-flex align-items-center ">
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
                <p className="px-2 mt-2">Or</p>
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
            </div>
            <p className="text-danger">{errorElement}</p>
            <div >
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-primary d-block w-50 mx-auto my-2">
                    <img src={google} alt="" />
                    <span className="px-3">Google Sign In</span>
                </button>
                <button className="btn btn-primary w-50 d-block  mx-auto my-2">
                    <img style={{ width: '30px' }} src={fb} alt="" />
                    <span className="px-3">Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-primary w-50 d-block  mx-auto my-2">
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className="px-3">Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import google from "../../assets/icons8-google-48.png"
import github from "../../assets/icons8-github-50.png"
const SocialLogin = () => {
    const {googleSignIn,githubSignIn}=useContext(AuthContext)
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>console.log(error))
    }
    const handleGithubSignIn=()=>{
        githubSignIn()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className='divider'>OR</div>
            <div >
                <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'>
                  <img src={google} alt="" />
                </button>
                <button onClick={handleGithubSignIn} className='btn btn-circle btn-outline ml-3'>
                  <img src={github} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
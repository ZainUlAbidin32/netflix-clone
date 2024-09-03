import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth } from '../components/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((authUser) => {
            console.log(authUser);
            navigate('/');
        })
        .catch((error) => alert(error.message))
    }
    const signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((authUser) => {
            console.log(authUser);
            navigate('/');
        })
        .catch(error => alert(error.message));
    }

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign Up</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={passwordRef} type="password" placeholder='Password' />
            <button onClick={signin} type='submit'>Sign In</button>
            <h4>
                <span className='signupScreen_gray'>New to Netflix? </span> 
                <span onClick={register} className='signupScreen_link'>Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignupScreen
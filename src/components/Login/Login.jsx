import React from 'react';
import './Login.css';

const Login = () => {
    return(
        <form action="" className='formStyle'>
            <label className='labelLogIn' htmlFor="">User</label>
            <input className='inputLogIn' type="text" name="" id="" placeholder='Username' />

            <label className='labelLogIn' htmlFor="">Password</label>
            <input className='inputLogIn' type="password" placeholder='Password' />

            <button> Log In </button>
        </form>
    )
}

export default Login
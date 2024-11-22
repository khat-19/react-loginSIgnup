// Login screen 
// #Universal tech hun
import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

function Login() {
  return (
    <div className='container'>
        <form>
            <h3>Login</h3>
            <div className='form-group'>
                <label htmlFor='email'>Username / Email</label>
                <input 
                    className='form-control'
                    type='text'
                    placeholder='username / email'
                    name='email'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                    className='form-control'
                    placeholder='password'
                    name='password'
                />
            </div>
        </form>
        <Link to='/signup'>Dont have an account? Signup</Link>
    </div>
  );
}

export default Login;

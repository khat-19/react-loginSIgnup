import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {
  return (
    <div className='container'>
        <form>
            <h3>Sign up</h3>
            <div className="form-group">
                <label htmlFor='username'>Username</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder='unsername'
                    name='username'
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    name='email'
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password"
                    name='password'
                    
                    />
            </div>
            <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Confirm Password"
                    name='confirmpassword'
                    
                    />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}

export default Signup;

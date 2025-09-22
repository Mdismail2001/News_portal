import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div  className='flex justify-center py-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className='text-center font-semibold text-2xl py-3'>Login your account </h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                     <p className='text-center font-semibold pt-5'>Don't Have An Account? <Link to="/auth/register" className='text-blue-500 underline'>Register</Link></p>
                </div>
            </div>        
        </div>
    );
};

export default Login;
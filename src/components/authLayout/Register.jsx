import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div  className='flex justify-center py-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className='text-center font-semibold text-2xl py-3'>Login your account </h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input type="name"  className="input" placeholder="Name" />
                    {/* photo url */}  
                    <label className="label">Photo url</label>
                    <input type="Photo url" className="input" placeholder="Photo url" />
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                     <p className='text-center font-semibold pt-5'>Already Have An Account? <Link to="/auth/login" className='text-blue-500 underline'>Login</Link></p>
                </div>
            </div>        
        </div>
    );
};

export default Register;
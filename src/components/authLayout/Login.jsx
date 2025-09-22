import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {logIn} = use(AuthContext)

    const handleLogIn =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
        .then(()=>{
            alert(" Successfully logged in")


        })
        .catch(error=>{
            alert(error.message)
        })
    }

    return (
        <div  className='flex justify-center py-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className='text-center font-semibold text-2xl py-3'>Login your account </h1>
                <div className="card-body">
                    <form onSubmit={handleLogIn} className="fieldset">
                        {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required/>
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required/>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                     <p className='text-center font-semibold pt-5'>Don't Have An Account? <Link to="/auth/register" className='text-blue-500 underline'>Register</Link></p>
                </div>
            </div>        
        </div>
    );
};

export default Login;
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext)  // createUser come from authProvider bya authContext

    const handleRegister =(e)=>{
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        // console.log(name,photo,email,password)
        createUser(email, password)      // call and pass value
        .then(result =>{
            const user = (result.user);
            setUser(user) //pass user
            // console.log(result.user);
        })
        .catch(error => {
            console.log(error)
            alert(error.message)
        })

    }

    return (
        <div  className='flex justify-center py-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <h1 className='text-center font-semibold text-2xl py-3'>Login your account </h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input type="name"  className="input" name='name' placeholder="Name" required/>
                    {/* photo url */}  
                    <label className="label">Photo url</label>
                    <input type="Photo url" className="input" name='photo' placeholder="Photo url"required />
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" required/>
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" required />

                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                     <p className='text-center font-semibold pt-5'>Already Have An Account? <Link to="/auth/login" className='text-blue-500 underline'>Login</Link></p>
                </div>
            </div>        
        </div>
    );
};

export default Register;
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import app from '../../firebase/Firebase.config';
import { getAuth,  GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const Register = () => {
    const {createUser, setUser, updateUser,} = use(AuthContext)  // createUser come from authProvider bya authContext
    const navigate = useNavigate();

    const handleRegister =(e)=>{
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        // console.log(name,photo,email,password)
        createUser(email, password)      // call and pass value
        .then(result =>{
            setUser(result.user);
            updateUser({displayName: name, photoURL: photo })
            .then(user =>{
                // console.log(user)
                navigate("/");
            })
            .catch(error =>{
                console.log(error) 
            })
            
            // console.log(result.user);
        })
        .catch(error => {
            console.log(error)
            alert(error.message)
        })
    };
    // log in register  with google
    const provider = new GoogleAuthProvider(); 
    const loginWithGoogle =() =>{
        signInWithPopup(auth,provider )
        .then(result =>{
            navigate("/")
            // console.log(result);
        })
        .catch(error =>{
            console.log(error)
        })
    }; 
    

    

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
                    <button onClick={loginWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                    </button>
                     <p className='text-center font-semibold pt-5'>Already Have An Account? <Link to="/auth/login" className='text-blue-500 underline'>Login</Link></p>
                </div>
            </div>        
        </div>
    );
};

export default Register;
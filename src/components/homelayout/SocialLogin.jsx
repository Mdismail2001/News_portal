import React, { use } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';

const SocialLogin = () => {
    const {loginWithGoogle} = use(AuthContext);
    // console.log(user);
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button  onClick={loginWithGoogle} className='btn w-full btn-outline btn-secondary text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap'>
                    <FcGoogle size={18} className="" />
                    Login with Google
                </button>
                <button className='btn w-full btn-outline btn-primary text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap'>
                    <FaGithub size={18} className="" />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;

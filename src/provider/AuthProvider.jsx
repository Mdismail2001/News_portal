import React, { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);// (app) come from firebase.config file (getAuth) from firebase
export const AuthContext = createContext(); // create context 

const AuthProvider = ({children}) => {
    const [user,  setUser] = useState(null);
    console.log(user)

    const createUser =(email, password)=>{
        // console.log(email,password)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authData ={
        user,
        setUser,
        createUser,  // pass to register page
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
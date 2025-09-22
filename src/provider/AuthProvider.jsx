import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);// (app) come from firebase.config file (getAuth) from firebase
export const AuthContext = createContext(); // create context 

const AuthProvider = ({children}) => {
    const [user,  setUser] = useState(null);
    // console.log(user)
    // register function
    const createUser =(email, password)=>{
        // console.log(email,password)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // user observer function for takeing current user 
    useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,(currentUser) =>{
            setUser(currentUser);
        });
        return()=>{
            unsubscribe();
        }
    },[])

    // log in function
    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out function 
    const logOut = ()=>{
       return signOut(auth)
    }

    const authData ={
        user,
        setUser,
        createUser,  // pass to register page for signin
        logOut,       // pass to navbar page for logout
        logIn          // pass to login page for login
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
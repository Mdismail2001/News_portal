import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const provider = new GoogleAuthProvider(); 

const auth = getAuth(app);// (app) come from firebase.config file (getAuth) from firebase
export const AuthContext = createContext(); // create context 


const AuthProvider = ({children}) => {
    const [user,  setUser] = useState(null);
    const [loading, setLoading] = useState(true);   // for user loading
    // console.log( loading ,user)
    // register function with email and password
    const createUser =(email, password)=>{
        // console.log(email,password)
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // log in register  with google
    const loginWithGoogle =() =>{
        signInWithPopup(auth,provider )
        .then(result =>{
            // console.log(result);
        })
        .catch(error =>{
            console.log(error)
        })
    }; 

    // user observer function for takeing current user 
    useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,(currentUser) =>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);   // for user loading
        });
        return()=>{
            unsubscribe();
        }
    },[])

    // log in function
    const logIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user function
    const updateUser =(updateData)=>{
        return updateProfile(auth.currentUser, updateData)
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
        logIn ,         // pass to login page for login
        loading,
        setLoading,
        updateUser,     // pass to register page for update user
        loginWithGoogle,  // pass to social login page for google login 
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
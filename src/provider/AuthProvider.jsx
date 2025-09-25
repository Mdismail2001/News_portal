import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword,  signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);// (app) come from firebase.config file (getAuth) from firebase
export const AuthContext = createContext(); // create context 


const AuthProvider = ({children}) => {
    const [user,  setUser] = useState(null);
    const [loading, setLoading] = useState(true);   // for user loading
    const [bookmarkNews, setBookmarkNews] = useState([]); // ✅ state for bookmarks
    // console.log( loading ,user)

    // register function with email and password
    const createUser =(email, password)=>{
        // console.log(email,password)
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
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

    // bookmark function
    const bookmarkBtn =(news)=>{
    // console.log(news);
    setBookmarkNews((prev) => [...prev, news]); // ✅ push into state
    };


    const authData ={
        user,
        setUser,
        createUser,  // pass to register page for signin
        logOut,       // pass to navbar page for logout
        logIn ,         // pass to login page for login
        loading,
        setLoading,
        updateUser,     // pass to register page for update user
        bookmarkBtn,
        bookmarkNews
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
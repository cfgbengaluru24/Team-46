import React, { createContext, useContext,useState,useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_APP_ID,
  };
const firebaseApp = initializeApp(firebaseConfig);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const firebaseAuth=getAuth(firebaseApp)

const googleProvider=new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
    const [user,setUser]=useState(null)

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,(user)=>{
            if(user) setUser(user);
            else setUser(null)
        })
    },[])
    const signup=(fullname,email,password)=>{
        createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    const signin=(email,password)=>{
        signInWithEmailAndPassword(firebaseAuth,email,password);
    }
    const signinGoogle=()=>{
        signInWithPopup(firebaseAuth,googleProvider)
    }

    const isLoggedIn=user?true:false
    return (
        <FirebaseContext.Provider value={{signup,signin,signinGoogle,isLoggedIn}}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

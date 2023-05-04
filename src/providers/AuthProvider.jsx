import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUserWithGoogle = (googleProvider) => {
       return signInWithPopup(auth, googleProvider)
      };

      const createUserWithGithub = (githubProvider)=>{
        return signInWithPopup(auth, githubProvider)
      }

      const updateUserProfile = (user, name, photo)=>{
        return updateProfile(user, {
            displayName: name, photoURL: photo
          })
      }

    const logOut = ()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log("logged in user inside auth state observer", loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])


    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        createUserWithGoogle,
        createUserWithGithub,
        updateUserProfile,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log("current user is",currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubcribe();
        }
    },[])
    const logOut =()=>{
        return signOut(auth);
    }
    const authInfo={
           user,
           loading,
           createUser,
           signInUser,
           logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
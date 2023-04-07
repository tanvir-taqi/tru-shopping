import React, { createContext, useEffect, useState } from 'react';
import { RecaptchaVerifier, onAuthStateChanged, signInWithPhoneNumber, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();


const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

        // sign in with phone number and recaptcha 
    const setUpRecaptcha = (number) => {
        const recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha-container',
            {},
            auth);
            recaptchaVerifier.render()
            return signInWithPhoneNumber(auth, number, recaptchaVerifier)
    }

     // log out user 
     const logOut = ()=>{
       
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();

    }, [])

    const authInfo = { user, loading ,setUpRecaptcha,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
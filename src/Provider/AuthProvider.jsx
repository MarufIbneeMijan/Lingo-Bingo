import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [currentUser, setcurrentUser] = useState(null);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const singOutUser = () => {
    signOut(auth).then(() => {
      
      setcurrentUser(null);
    });
  };
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
      setLoading(false);
    });
    return () => {
      unSubcribe();
    };
  }, []);
  const provider = new GoogleAuthProvider();

  const singInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
 
    const handleupdateProfile =(name,photoURL)=>{
      return updateProfile(auth.currentUser,{
         displayName:name,
         photoURL:photoURL
       })
     }
 


  const values = {
    registerUser,
    loginUser,
    currentUser,
    loading,
    singOutUser,
    setLoading,
    singInWithGoogle,
    handleupdateProfile
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthProvider;

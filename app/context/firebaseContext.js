'use client'
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from "firebase/storage";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth, storage } from '../firebase'
import { createContext, useEffect, useState } from "react";

const FirebaseContext = createContext(null);

const initialState = {
  isLoggedIn: false,
  user: null
};

export const FirebaseProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        setState({
          isLoggedIn: true,
          user
        })
      }else{
        setState({
          isLoggedIn: false,
          user: null
        })
      }
    })
  }, [state])

  const firebaseEmailPasswordSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(data => console.log(data))
    .catch(err => {throw Error(err)})
  };

  const firebaseGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const firebaseRegister = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {signOut(auth); localStorage.clear()};

  const uploadImage = async (file, name, route) => {
    const metadata = {
      contentType: 'image/jpeg'
    };

    const storageRef = ref(storage, `${route}/` + name);
    const uploadTask = await uploadBytesResumable(storageRef, file, metadata);
    const downloadLink = await getDownloadURL(uploadTask.ref);

    return downloadLink
  }

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  const updateProfile = () => { };

  return (
    <FirebaseContext.Provider
      value={{
        ...state,
        firebaseRegister,
        firebaseEmailPasswordSignIn,
        login: () => { },
        firebaseGoogleSignIn,
        logout,
        uploadImage,
        resetPassword,
        updateProfile
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
  
};

export default FirebaseContext;
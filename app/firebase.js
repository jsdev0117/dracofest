// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs7duexTZmSIiR3I3pZNUyNEakshULV4g",
  authDomain: "draco-f06df.firebaseapp.com",
  projectId: "draco-f06df",
  storageBucket: "draco-f06df.appspot.com",
  messagingSenderId: "396252729545",
  appId: "1:396252729545:web:8766b5dcc3b1aa46287d18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
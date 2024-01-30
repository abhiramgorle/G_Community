// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth,onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBSypMu7jmV5ivFYq8gWE6tqGupBTTV36o",
  authDomain: "socialmedia-ba8b8.firebaseapp.com",
  projectId: "socialmedia-ba8b8",
  storageBucket: "socialmedia-ba8b8.appspot.com",
  messagingSenderId: "650068835622",
  appId: "1:650068835622:web:fd64f31f452e6dcb7a95e7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db,onAuthStateChanged}
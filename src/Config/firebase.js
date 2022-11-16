// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' ; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain:`${process.env.REACT_APP_DOMAIN_API_KEY}`,
  projectId: "chat-web-app-98518",
  storageBucket: "chat-web-app-98518.appspot.com",
  messagingSenderId: "686421841209",
  appId: "1:686421841209:web:68ec38d3198cb90893c4e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getFirestore(app) ; 
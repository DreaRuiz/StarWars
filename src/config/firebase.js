// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAjP7PCEvPN1OXHnAwCg_orf8PKlFk3nc",
    authDomain: "sprint8-itacademy.firebaseapp.com",
    projectId: "sprint8-itacademy",
    storageBucket: "sprint8-itacademy.appspot.com",
    messagingSenderId: "547032934523",
    appId: "1:547032934523:web:5cf97c5e1635b177bfdade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
export const db = getDatabase(app);
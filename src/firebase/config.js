// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgsgbhRU6cAYIJshMu1uHvXl_3N7ZfYCc",
    authDomain: "friends-1ad24.firebaseapp.com",
    projectId: "friends-1ad24",
    storageBucket: "friends-1ad24.appspot.com",
    messagingSenderId: "397592731211",
    appId: "1:397592731211:web:f01641f6ef3f14beeff7ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Firebase auth referansını React uygulamasını ekeleme 
export const auth = getAuth(app);
// Add google Provider
export const provider = new GoogleAuthProvider();
// Firebase de kurdugumuz Firestore Databasein referansını al
export const db = getFirestore(app)
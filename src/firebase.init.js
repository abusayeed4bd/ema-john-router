// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuJBm9fS-ad7lOK-_yIBZp-T_n82qpjUw",
    authDomain: "ema-john-simmple-716ac.firebaseapp.com",
    projectId: "ema-john-simmple-716ac",
    storageBucket: "ema-john-simmple-716ac.appspot.com",
    messagingSenderId: "103204102769",
    appId: "1:103204102769:web:c2b34317263f4def3331d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
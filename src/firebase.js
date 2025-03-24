// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAdPvpXR9WpXdfp75RzWbCfPn_1Y-ItkjQ",
    authDomain: "ecom-react-app-f193c.firebaseapp.com",
    projectId: "ecom-react-app-f193c",
    storageBucket: "ecom-react-app-f193c.firebasestorage.app",
    messagingSenderId: "749111645069",
    appId: "1:749111645069:web:11f61bef2ad9780e77e3c4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

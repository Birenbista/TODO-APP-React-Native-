// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCj8bU4k5jkanv6bCLIPG_6Pti6Q9DRQUQ",
    authDomain: "reactnative-lab4.firebaseapp.com",
    projectId: "reactnative-lab4",
    storageBucket: "reactnative-lab4.appspot.com",
    messagingSenderId: "124942169096",
    appId: "1:124942169096:web:7f8e9101cd41e0fe100dbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
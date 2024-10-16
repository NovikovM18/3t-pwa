// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfAqcEiLceMXThDtKSFaWYhke2BYMwHD4",
  authDomain: "tapp-497ad.firebaseapp.com",
  projectId: "tapp-497ad",
  storageBucket: "tapp-497ad.appspot.com",
  messagingSenderId: "1056111856158",
  appId: "1:1056111856158:web:30674d686d70dd82a9fc0f",
  measurementId: "G-85PYBH32MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
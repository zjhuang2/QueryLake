// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6yqaaZtOdWzduQyt6h_-eBiDvWgbCEQ4",
  authDomain: "querylake.firebaseapp.com",
  projectId: "querylake",
  storageBucket: "querylake.appspot.com",
  messagingSenderId: "846354013317",
  appId: "1:846354013317:web:9c35ce2ce942931c4eddec",
  measurementId: "G-T35RS831PR",
};

// Initialize Firebase and establish connection
const app = initializeApp(firebaseConfig);

// Connect to the database
export const db = getFirestore(app);

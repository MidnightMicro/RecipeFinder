// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBccJ1SJX1osipxNpJ6wRTIa8CTmua9-2o",
  authDomain: "recipe-finder-a13f3.firebaseapp.com",
  projectId: "recipe-finder-a13f3",
  storageBucket: "recipe-finder-a13f3.appspot.com",
  messagingSenderId: "138895583590",
  appId: "1:138895583590:web:cbb988568aea7e05be00a7",
  measurementId: "G-KSPTPG4VZX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
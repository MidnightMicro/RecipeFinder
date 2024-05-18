// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBccJ1SJX1osipxNpJ6wRTIa8CTmua9-2o",
  authDomain: "recipe-finder-a13f3.firebaseapp.com",
  projectId: "recipe-finder-a13f3",
  storageBucket: "recipe-finder-a13f3.appspot.com",
  messagingSenderId: "138895583590",
  appId: "1:138895583590:web:cbb988568aea7e05be00a7",
  measurementId: "G-KSPTPG4VZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
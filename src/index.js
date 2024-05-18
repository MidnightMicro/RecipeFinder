import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyBccJ1SJX1osipxNpJ6wRTIa8CTmua9-2o",

  authDomain: "recipe-finder-a13f3.firebaseapp.com",

  projectId: "recipe-finder-a13f3",

  storageBucket: "recipe-finder-a13f3.appspot.com",

  messagingSenderId: "138895583590",

  appId: "1:138895583590:web:cbb988568aea7e05be00a7",

  measurementId: "G-KSPTPG4VZX"

};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
    <App />
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

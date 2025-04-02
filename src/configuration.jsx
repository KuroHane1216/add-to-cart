// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAv4w1Kwg8nJwb3lefeLzV63yMTRGtOCNs",

  authDomain: "realtime-database-10f99.firebaseapp.com",

  databaseURL: "https://realtime-database-10f99-default-rtdb.firebaseio.com",

  projectId: "realtime-database-10f99",

  storageBucket: "realtime-database-10f99.firebasestorage.app",

  messagingSenderId: "487658577040",

  appId: "1:487658577040:web:052338042abbd1cf9c0c15"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;
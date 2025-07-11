// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7z-wQ9bGV9Os0LF7-fOhsdCHP9J0Y0YA",
  authDomain: "encurtador-url-efce9.firebaseapp.com",
  projectId: "encurtador-url-efce9",
  storageBucket: "encurtador-url-efce9.firebasestorage.app",
  messagingSenderId: "136085598258",
  appId: "1:136085598258:web:7f68b33b804e4fc8cecc2b",
  measurementId: "G-Y72P4C0Z4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
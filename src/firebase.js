// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1cOuRIAjZcC7Vbf8PiG6ilpQRwMdoRZs",
  authDomain: "auth-app-a1d55.firebaseapp.com",
  projectId: "auth-app-a1d55",
  storageBucket: "auth-app-a1d55.firebasestorage.app",
  messagingSenderId: "371745180021",
  appId: "1:371745180021:web:d86f13f117f2d646116b3c",
  measurementId: "G-JFN45NYFMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);


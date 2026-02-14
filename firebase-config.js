// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7dGqC_xz8c3KnrqAh3LIxUtaiRwuxiZk",
  authDomain: "themclaren1-db7d7.firebaseapp.com",
  projectId: "themclaren1-db7d7",
  storageBucket: "themclaren1-db7d7.firebasestorage.app",
  messagingSenderId: "141811743758",
  appId: "1:141811743758:web:34588940086a1f8d56905f",
  measurementId: "G-Q0TGM6TFLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

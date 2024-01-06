// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi9XhAit5FTEqmELpkf-8hekgFvSD1n30",
  authDomain: "letschat-bd271.firebaseapp.com",
  databaseURL: "https://letschat-bd271-default-rtdb.firebaseio.com",
  projectId: "letschat-bd271",
  storageBucket: "letschat-bd271.appspot.com",
  messagingSenderId: "1030217130139",
  appId: "1:1030217130139:web:7054ebdf73455c2cf7263e",
  measurementId: "G-JWCYV9LFDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
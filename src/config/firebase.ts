// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbkg793-VvCebYidEFv6iwFyBRNFysiUI",
  authDomain: "social-media-project-96060.firebaseapp.com",
  projectId: "social-media-project-96060",
  storageBucket: "social-media-project-96060.appspot.com",
  messagingSenderId: "597433749053",
  appId: "1:597433749053:web:cb789056149b9c47292454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth();
export const provider = new GoogleAuthProvider();
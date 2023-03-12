// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5WS2gG5-L59RYnOFEuQJ2WpZwMjDxQ3A",
  authDomain: "netflix-react-e7640.firebaseapp.com",
  projectId: "netflix-react-e7640",
  storageBucket: "netflix-react-e7640.appspot.com",
  messagingSenderId: "244912245017",
  appId: "1:244912245017:web:497f0117ac57476d4e5d88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

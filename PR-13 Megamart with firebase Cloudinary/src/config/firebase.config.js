// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ9Mfgi1hCe05DjJ5AZW3EQIYB_7_Zmtw",
  authDomain: "megamart-39ace.firebaseapp.com",
  projectId: "megamart-39ace",
  storageBucket: "megamart-39ace.firebasestorage.app",
  messagingSenderId: "858161984171",
  appId: "1:858161984171:web:bc56b83b656fb8c587bdee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
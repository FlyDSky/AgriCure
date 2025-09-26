// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔥 apna firebase config yaha daal
const firebaseConfig = {
  apiKey: "AIzaSyAj_u1kR5y8CgOyVjc-iuRB0KEiH8Rk6dk",
  authDomain: "agroai-a0336.firebaseapp.com",
  projectId: "agroai-a0336",
  storageBucket: "agroai-a0336.firebasestorage.app",
  messagingSenderId: "720810790608",
  appId: "1:720810790608:web:8d9200b875072c19ebd8d5",
  measurementId: "G-508H161NBK"
 };

// initialize
const app = initializeApp(firebaseConfig);

// named exports
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
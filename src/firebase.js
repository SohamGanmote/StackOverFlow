import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "stackoverflow-1e566.firebaseapp.com",
  projectId: "stackoverflow-1e566",
  storageBucket: "stackoverflow-1e566.appspot.com",
  messagingSenderId: "745269953612",
  appId: "1:745269953612:web:79e6942ef9a8ee402060e9",
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

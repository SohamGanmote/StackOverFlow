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

// Emenrgency DataBase

// const firebaseConfig = {
//   apiKey: "AIzaSyCgJuWjnvu46KcIqnKRwKZkuUZ_Z_4jFUw",
//   authDomain: "sonew-8ed9a.firebaseapp.com",
//   projectId: "sonew-8ed9a",
//   storageBucket: "sonew-8ed9a.appspot.com",
//   messagingSenderId: "571813754036",
//   appId: "1:571813754036:web:3a5fb9d86295fbbb5c13e1",
// };

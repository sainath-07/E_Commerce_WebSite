// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBGIfLli5YZ0u4r0KJ_6UQ8Lzscg2bkVBw",
  authDomain: "ecommerce-8b5cd.firebaseapp.com",
  databaseURL: "https://ecommerce-8b5cd-default-rtdb.firebaseio.com",
  projectId: "ecommerce-8b5cd",
  storageBucket: "ecommerce-8b5cd.appspot.com",
  messagingSenderId: "664813837761",
  appId: "1:664813837761:web:a33d881fa28e40f4b56340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()


export default app;

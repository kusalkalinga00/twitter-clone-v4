// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v4-c2efc.firebaseapp.com",
  projectId: "twitter-v4-c2efc",
  storageBucket: "twitter-v4-c2efc.appspot.com",
  messagingSenderId: "4865060123",
  appId: "1:4865060123:web:1af824c2f307659cfaf7be",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFireStore();
const storage = getStorage();

export { app, db, storage };

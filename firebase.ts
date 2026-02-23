// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "sharon-vocal-school.firebaseapp.com",
  projectId: "sharon-vocal-school",
  storageBucket: "sharon-vocal-school.firebasestorage.app",
  messagingSenderId: "1045748715648",
  appId: "1:1045748715648:web:66c30824d90e731c619665"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

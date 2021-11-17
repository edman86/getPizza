import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5HM0VNwtb68kGmItTGaKGojXB9-xD-bw",
  authDomain: "getpizza-99e08.firebaseapp.com",
  projectId: "getpizza-99e08",
  storageBucket: "getpizza-99e08.appspot.com",
  messagingSenderId: "434695287194",
  appId: "1:434695287194:web:1e2142d57cd9d6a1828a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
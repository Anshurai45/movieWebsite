// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw8UN8o62eZa3S98hcpjdOBsv5UnfxG7w",
  authDomain: "desiremovie-8088c.firebaseapp.com",
  projectId: "desiremovie-8088c",
  storageBucket: "desiremovie-8088c.appspot.com",
  messagingSenderId: "718668483841",
  appId: "1:718668483841:web:23d8a695310b9bdfae9f00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef =collection(db, "movies");
export const reviewsRef =collection(db, "reviews");
export default app
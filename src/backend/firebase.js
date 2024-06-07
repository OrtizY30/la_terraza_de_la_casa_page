// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6KHaH3lsCDZ2EU3l76vmRSjB7Ga8XmZI",
  authDomain: "la-terraza-de-la-casa-db.firebaseapp.com",
  projectId: "la-terraza-de-la-casa-db",
  storageBucket: "la-terraza-de-la-casa-db.appspot.com",
  messagingSenderId: "774388028878",
  appId: "1:774388028878:web:ae3e4740e774e6f2b9879f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

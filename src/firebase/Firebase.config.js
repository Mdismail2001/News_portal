// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHpxBHLGp61srybegJlWsEulOIGaG2np4",
  authDomain: "news-portal-711fa.firebaseapp.com",
  projectId: "news-portal-711fa",
  storageBucket: "news-portal-711fa.firebasestorage.app",
  messagingSenderId: "1095637635308",
  appId: "1:1095637635308:web:86f451abe483e58d7995c9"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export default app;
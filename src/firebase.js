// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7gojGkxysesUlci4h3nV49FBSe9_G4r4",
  authDomain: "library-management-syste-bd88a.firebaseapp.com",
  projectId: "library-management-syste-bd88a",
  storageBucket: "library-management-syste-bd88a.firebasestorage.app",
  messagingSenderId: "23258940605",
  appId: "1:23258940605:web:d7a655efeb34c7549ae3d4",
  measurementId: "G-8VC8TTB1HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
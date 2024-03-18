import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDqEmkpMyOKrc39udGF-6nVywKwaK-7oLg",
  authDomain: "harvestlink-425b1.firebaseapp.com",
  projectId: "harvestlink-425b1",
  storageBucket: "harvestlink-425b1.appspot.com",
  messagingSenderId: "164129302195",
  appId: "1:164129302195:web:3b36315f14e879b9eaf2c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
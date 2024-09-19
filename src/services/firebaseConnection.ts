import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMlWC1-qIvh9gzF0_oOx8toqzNT4tMOr8",
  authDomain: "task-verse-3b0a5.firebaseapp.com",
  projectId: "task-verse-3b0a5",
  storageBucket: "task-verse-3b0a5.appspot.com",
  messagingSenderId: "636667965952",
  appId: "1:636667965952:web:bb00f9d9b9e84cc2309ee5"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export {db};
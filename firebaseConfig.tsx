// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseApikey = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: 'AIzaSyCAFAs6glHRmPcz4mqwZ6tTbtIT4PAmfus',
  authDomain: 'kine-app-8f3cb.firebaseapp.com',
  projectId: 'kine-app-8f3cb',
  storageBucket: 'kine-app-8f3cb.appspot.com',
  messagingSenderId: '464147389904',
  appId: '1:464147389904:web:7557133d179013f5062dd5',
  measurementId: 'G-VTLH1JJYMX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);

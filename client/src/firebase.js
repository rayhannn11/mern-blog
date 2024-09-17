// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-cd53b.firebaseapp.com',
  projectId: 'mern-blog-cd53b',
  storageBucket: 'mern-blog-cd53b.appspot.com',
  messagingSenderId: '604483091133',
  appId: '1:604483091133:web:e2d85dbb4dff1de3a015d4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

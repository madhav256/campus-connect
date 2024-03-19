// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7WoQ1V5_d1xfjrW9CWfC1c5skj4yISVA",
  authDomain: "mini-project-99d21.firebaseapp.com",
  projectId: "mini-project-99d21",
  storageBucket: "mini-project-99d21.appspot.com",
  messagingSenderId: "536037247417",
  appId: "1:536037247417:web:013111d14a73ba7d93ce68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };


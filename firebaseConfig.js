// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCh2rMukjcpKGxto9QVzpW4x2uNph_2U8",
  authDomain: "rickandmortypam.firebaseapp.com",
  databaseURL: "https://rickandmortypam-default-rtdb.firebaseio.com",
  projectId: "rickandmortypam",
  storageBucket: "rickandmortypam.appspot.com",
  messagingSenderId: "909882898470",
  appId: "1:909882898470:web:a7b9d943149176c2970ee7",
  measurementId: "G-3BCV10ZDC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};
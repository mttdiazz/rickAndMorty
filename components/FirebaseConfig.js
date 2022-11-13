import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAPs4L25ta_YG8lA5Bgq-jZgSxnWuUOBiE",
    authDomain: "tppammacagniortiz.firebaseapp.com",
    projectId: "tppammacagniortiz",
    storageBucket: "tppammacagniortiz.appspot.com",
    messagingSenderId: "362874795084",
    appId: "1:362874795084:web:b67d155be5ea8003f1b0e9",
    measurementId: "G-JS1WFJVMDD"
  };
//Inicializa firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default {
    firebase,
    db
};
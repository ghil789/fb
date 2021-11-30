// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBubRNF6A1Tzapt6Ft9x135YMOc1Hrh3-w",
    authDomain: "campuslife-c1841.firebaseapp.com",
    projectId: "campuslife-c1841",
    storageBucket: "campuslife-c1841.appspot.com",
    messagingSenderId: "531496213999",
    appId: "1:531496213999:web:df0abc28346058d16aea1a",
    measurementId: "G-PP0PF1J9QE"
  };
  
  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };

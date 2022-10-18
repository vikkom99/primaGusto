import { initializeApp } from "firebase/app"
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDtcc9hhw7vTJxj8TqfgUvV7HOmo3ToXdo",
    authDomain: "prima-gusto.firebaseapp.com",
    databaseURL:
      "https://prima-gusto-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "prima-gusto",
    storageBucket: "prima-gusto.appspot.com",
    messagingSenderId: "450904464903",
    appId: "1:450904464903:web:61713d5e7c55d5ccc114a2",
    measurementId: "G-T9KDTBF2F7",
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)
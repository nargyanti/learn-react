import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDNBBFi51r4i0E1UTeNkqrYosxKMHWUOb0",
    authDomain: "react-firebase-b30dd.firebaseapp.com",
    projectId: "react-firebase-b30dd",
    storageBucket: "react-firebase-b30dd.appspot.com",
    messagingSenderId: "44880166301",
    appId: "1:44880166301:web:33dbd5fcc1879ceb4b8374",
    measurementId: "G-1BZJBCQDLC"
};

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb
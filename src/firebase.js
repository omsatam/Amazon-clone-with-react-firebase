import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxjCzuDy3PQsMDuE4BgqFdb99uFzs_bPE",
  authDomain: "clone-2a55a.firebaseapp.com",
  databaseURL: "https://clone-2a55a-default-rtdb.firebaseio.com",
  projectId: "clone-2a55a",
  storageBucket: "clone-2a55a.appspot.com",
  messagingSenderId: "736490644072",
  appId: "1:736490644072:web:d51629347c2ee3725091dd",
  measurementId: "G-86WM58T05G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

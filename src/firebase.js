import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBJDofzDV80ixEegXEKtki4moyx9BK3lu0",
  authDomain: "teamchat-deek9399.firebaseapp.com",
  projectId: "teamchat-deek9399",
  storageBucket: "teamchat-deek9399.appspot.com",
  messagingSenderId: "195169483431",
  appId: "1:195169483431:web:0191562863a64c4e5fb982",
};
//initializes or connects to firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

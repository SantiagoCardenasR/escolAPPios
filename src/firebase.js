import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDedLDi6C0PdHupP891nujpaTH376XcHSA",
  authDomain: "escolappios.firebaseapp.com",
  databaseURL: "https://escolappios.firebaseio.com",
  projectId: "escolappios",
  storageBucket: "escolappios.appspot.com",
  messagingSenderId: "520803613741",
  appId: "1:520803613741:web:93533fb25728b9bb4dcca4",
  measurementId: "G-94XLWWG2QL",
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const reference = firebase.database().ref();

export { db, auth, reference };

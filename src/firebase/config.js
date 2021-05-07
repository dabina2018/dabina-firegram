import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC0oION1DrXadetkfpSyjOHeELYva6y_u4",
  authDomain: "firegram-5f0fd.firebaseapp.com",
  databaseURL: "https://firegram-5f0fd-default-rtdb.firebaseio.com",
  projectId: "firegram-5f0fd",
  storageBucket: "firegram-5f0fd.appspot.com",
  messagingSenderId: "533273915179",
  appId: "1:533273915179:web:8eaefe7991e7a94b9f5f6e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export{ projectStorage, projectFirestore, timestamp };
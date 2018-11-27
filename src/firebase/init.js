import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyAFKxzx3I-YTzHC4p7iMrhxp3_CeBy74nk",
  authDomain: "event-app-c2bbe.firebaseapp.com",
  databaseURL: "https://event-app-c2bbe.firebaseio.com",
  projectId: "event-app-c2bbe",
  storageBucket: "event-app-c2bbe.appspot.com",
  messagingSenderId: "719693811004"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore();

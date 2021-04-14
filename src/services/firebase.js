import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyCJPx98i0KxuA134owIZuJDdV5VF6Xu_s4",
    authDomain: "applanchonetereactnative.firebaseapp.com",
    projectId: "applanchonetereactnative",
    storageBucket: "applanchonetereactnative.appspot.com",
    messagingSenderId: "822065040224",
    appId: "1:822065040224:web:e82cefe742fb003c372c05",
    measurementId: "G-W33KB4L5KT"
  };
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
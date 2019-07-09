import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbn6UxXZlOf1q3SHFuj6N3HknHYAZxLis",
    authDomain: "crwn-db-777.firebaseapp.com",
    databaseURL: "https://crwn-db-777.firebaseio.com",
    projectId: "crwn-db-777",
    storageBucket: "",
    messagingSenderId: "69936519278",
    appId: "1:69936519278:web:13f561fa88508a09"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
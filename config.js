import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC7JuBN5_-_iYcLlfIvztQ226rqubwC9PA",
  authDomain: "barter-app-172ee.firebaseapp.com",
  projectId: "barter-app-172ee",
  storageBucket: "barter-app-172ee.appspot.com",
  messagingSenderId: "941010835095",
  appId: "1:941010835095:web:b58c6072dd58044b097bd2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

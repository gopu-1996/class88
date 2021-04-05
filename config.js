import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCAntJp1RoJyiGNRQ6VYQwNHPx3yuTMqhs",
  authDomain: "book-santa-c43ba.firebaseapp.com",
  projectId: "book-santa-c43ba",
  storageBucket: "book-santa-c43ba.appspot.com",
  messagingSenderId: "286793565660",
  appId: "1:286793565660:web:472d09fe9dc88c1231fb19"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCpGO5kL4d9m3O7Ux7vQ2bmSsTUFajcLfQ",
    authDomain: "alzcare-fdf1e.firebaseapp.com",
    databaseURL: "https://alzcare-fdf1e.firebaseio.com",
    projectId: "alzcare-fdf1e",
    storageBucket: "alzcare-fdf1e.appspot.com",
    messagingSenderId: "962247959171",
    appId: "1:962247959171:web:2ef6601b5b97a345d1f1b6",
    measurementId: "G-ZZ3CRQB4G2"
  });

  var db = firebaseApp.firestore();

  export { db };
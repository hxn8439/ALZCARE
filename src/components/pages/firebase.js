import firebase from 'firebase';
import firebase1 from 'firebase/app';
import 'firebase/auth';

  var firebaseApp = {
    apiKey: "AIzaSyCpGO5kL4d9m3O7Ux7vQ2bmSsTUFajcLfQ",
    authDomain: "alzcare-fdf1e.firebaseapp.com",
    databaseURL: "https://alzcare-fdf1e.firebaseio.com",
    projectId: "alzcare-fdf1e",
    storageBucket: "alzcare-fdf1e.appspot.com",
    messagingSenderId: "962247959171",
    appId: "1:962247959171:web:2ef6601b5b97a345d1f1b6",
    measurementId: "G-ZZ3CRQB4G2"
  };

  const config = 
  {
    apiKey: "AIzaSyCpGO5kL4d9m3O7Ux7vQ2bmSsTUFajcLfQ",
    authDomain: "alzcare-fdf1e.firebaseapp.com",
    databaseURL: "https://alzcare-fdf1e.firebaseio.com",
    projectId: "alzcare-fdf1e",
    storageBucket: "alzcare-fdf1e.appspot.com",
    messagingSenderId: "962247959171",
    appId: "1:962247959171:web:2ef6601b5b97a345d1f1b6",
    measurementId: "G-ZZ3CRQB4G2"
  };

  firebase.initializeApp(firebaseApp);

  var db = firebase.firestore();
  const fire = firebase1.initializeApp(config, "other");

  console.log(firebase.app().name);  // "[DEFAULT]"
  console.log(firebase1.name);    // "otherProject"

  export const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export { db };
  export default fire;
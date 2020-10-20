import firebase from 'firebase';
import firebase1 from 'firebase/app';
import 'firebase/auth';
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

// created variable for firebase SDK snippet for the use of firebase Cloud Firestore. -- Hamilton Nguyen 10/19/2020
//***TA AND PROFESSOR, DO NOT REVEAL THE CREDITIONALS BELOW TO ANYONE DUE TO SECURITY AND PRIVACY REASONS FOR THIS PROJECT. - Hamilton Nguyen 10/19/2020 ***
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

  // Created constant for firebase SDK snippet for the use of Firebase Authentication -- - Hamilton Nguyen 10/19/2020
  //***TA AND PROFESSOR, DO NOT REVEAL THE CREDITIONALS BELOW TO ANYONE DUE TO SECURITY AND PRIVACY REASONS FOR THIS PROJECT. - Hamilton Nguyen 10/19/2020 ***
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
//***TA AND PROFESSOR, DO NOT REVEAL THE CREDITIONALS BELOW TO ANYONE DUE TO SECURITY AND PRIVACY REASONS FOR THIS PROJECT. - Hamilton Nguyen 10/19/2020 ***
//***TA AND PROFESSOR, DO NOT REVEAL THE CREDITIONALS BELOW TO ANYONE DUE TO SECURITY AND PRIVACY REASONS FOR THIS PROJECT. - Hamilton Nguyen 10/19/2020 ***
//***TA AND PROFESSOR, DO NOT REVEAL THE CREDITIONALS BELOW TO ANYONE DUE TO SECURITY AND PRIVACY REASONS FOR THIS PROJECT. - Hamilton Nguyen 10/19/2020 ***

  firebase.initializeApp(firebaseApp);

  var db = firebase.firestore();
  const fire = firebase1.initializeApp(config, "other");

  //branch off separate creditionals that called from the same firebase libaries.  Hamilton Nguyen 10/19/2020
  console.log(firebase.app().name);  // "[DEFAULT]"
  console.log(firebase1.name);    // "otherProject"

  //Implement a Google account AutoAuthentication without the use of manually creating a username and password. Hamilton Nguyen 10/19/2020
  export const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export { db };
  export default fire;

  //***TA AND PROFESSOR, DO NOT REVEAL THE CREDITIONALS BELOW TO ANYONE DUE TO SECURITY AND PRIVACY REASONS FOR THIS PROJECT. - Hamilton Nguyen 10/19/2020 ***
//***TA AND PROFESSOR, DO NOT REVEAL THE CREDITIONALS BELOW TO ANYONE DUE TO SECURITY AND PRIVACY REASONS FOR THIS PROJECT. - Hamilton Nguyen 10/19/2020 ***
//***TA AND PROFESSOR, DO NOT REVEAL THE CREDITIONALS BELOW TO ANYONE DUE TO SECURITY AND PRIVACY REASONS FOR THIS PROJECT. - Hamilton Nguyen 10/19/2020 ***
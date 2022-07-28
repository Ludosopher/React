import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDhlA-Q1KUkWU_avCows-COSUVEZKL1cp0",
    authDomain: "react-cb296.firebaseapp.com",
    projectId: "react-cb296",
    storageBucket: "react-cb296.appspot.com",
    messagingSenderId: "845642796520",
    appId: "1:845642796520:web:a3c21ed3fd2a7ce886285d"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();
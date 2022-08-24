import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCDxzx2u3Q8re9bd_FGkV0OTnMYnEbFevo",
    authDomain: "udemy-firebase-sites-9bc98.firebaseapp.com",
    projectId: "udemy-firebase-sites-9bc98",
    storageBucket: "udemy-firebase-sites-9bc98.appspot.com",
    messagingSenderId: "211741095964",
    appId: "1:211741095964:web:9bb2c17cf61f486ba107d9"
};
  

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }

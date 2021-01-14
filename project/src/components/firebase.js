import firebase from 'firebase/app';
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDKGo_0UZ2C6CerkeK_3smDx7WoPkNRRFE",
  authDomain: "visitordetails-9cf2b.firebaseapp.com",
  projectId: "visitordetails-9cf2b",
  storageBucket: "visitordetails-9cf2b.appspot.com",
  messagingSenderId: "464870051207",
  appId: "1:464870051207:web:069f262b954795c129d722"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
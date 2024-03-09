import firebase from 'firebase/compat/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAv7HEJ4-tR103gm6ZuR6SmwH_1d47WgYk",
  authDomain: "login-1827a.firebaseapp.com",
  databaseURL: "https://login-1827a-default-rtdb.firebaseio.com",
  projectId: "login-1827a",
  storageBucket: "login-1827a.appspot.com",
  messagingSenderId: "166788965100",
  appId: "1:166788965100:web:61f0f71cb2d5c896737bc9",
  measurementId: "G-P0N6BHLB6B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
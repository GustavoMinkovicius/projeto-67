import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyADODkQ_gyoJpRQ_m9faGQQdoJizP8cf4E",
  authDomain: "projeto-67-9e5c7.firebaseapp.com",
  projectId: "projeto-67-9e5c7",
  storageBucket: "projeto-67-9e5c7.appspot.com",
  messagingSenderId: "807234113890",
  appId: "1:807234113890:web:bafcdca14d9fc88e111c3b",
  measurementId: "G-C7Z0KSN2GN"
};

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
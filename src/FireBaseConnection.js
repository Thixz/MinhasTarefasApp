import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBDbiIzj-OMsjOfpK6nZMmaEVPoPINs39s',

  authDomain: 'minhastarefasapp-6bf85.firebaseapp.com',

  projectId: 'minhastarefasapp-6bf85',

  storageBucket: 'minhastarefasapp-6bf85.appspot.com',

  messagingSenderId: '312701258897',

  appId: '1:312701258897:web:a2786f988a098fe286c330',

  measurementId: 'G-KEEG8GT4J5',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

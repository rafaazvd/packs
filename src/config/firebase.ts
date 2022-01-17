import firebase from 'firebase';
require('firebase/storage');

const config = {
  apiKey: 'AIzaSyAsGIIUgSiWProiAvVqIAwUmBfsJ5A9cxk',
  authDomain: 'off-let.firebaseapp.com',
  databaseURL: 'https://off-let.firebaseio.com',
  projectId: 'off-let',
  storageBucket: 'off-let.appspot.com',
  messagingSenderId: '780373306450',
  appId: '1:780373306450:web:c81688cb4e99dcb19c038b',
  measurementId: 'G-3D9SRBJV2E',
};

if(!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}
firebase.auth().useDeviceLanguage();


const storage = firebase.storage();
const auth = firebase.auth();

export {
  storage,
  auth,
};
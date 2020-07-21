import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAMSMYGOlPTmMXO_fs9qQpJ3VRc7hTIyzg",
    authDomain: "diary-3f0bb.firebaseapp.com",
    databaseURL: "https://diary-3f0bb.firebaseio.com",
    projectId: "diary-3f0bb",
    storageBucket: "diary-3f0bb.appspot.com",
    messagingSenderId: "249286621822",
    appId: "1:249286621822:web:a1f33b921c1d038d1ef62f"
};

firebase.initializeApp(config);

export const database= firebase.database().ref('/notes');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider()
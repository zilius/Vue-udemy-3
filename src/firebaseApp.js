import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBt7k0PLONvxt2NOz-0tefmv00fioGaIzk",
    authDomain: "turnout-25070.firebaseapp.com",
    databaseURL: "https://turnout-25070.firebaseio.com",
    projectId: "turnout-25070",
    storageBucket: "turnout-25070.appspot.com",
    messagingSenderId: "40356977361"
};

export const firebaseApp = firebase.initializeApp(config)

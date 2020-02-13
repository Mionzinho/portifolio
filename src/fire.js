import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyDHrKWkdAiOkwttZks02ynj365kaLQVAoc",
    authDomain: "portifa-marsola.firebaseapp.com",
    databaseURL: "https://portifa-marsola.firebaseio.com",
    projectId: "portifa-marsola",
    storageBucket: "portifa-marsola.appspot.com",
    messagingSenderId: "83250275653",
    appId: "1:83250275653:web:aabc4df8994c08e2480a2c",
    measurementId: "G-XLY031EYWB"
};
var fire = firebase.initializeApp(config);
export default fire;
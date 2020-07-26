import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCEkIQO8_iEBAIbKFsksAd0Ntwvv4YLfKA",
    authDomain: "productivity-app-react.firebaseapp.com",
    databaseURL: "https://productivity-app-react.firebaseio.com",
    projectId: "productivity-app-react",
    storageBucket: "productivity-app-react.appspot.com",
    messagingSenderId: "270042979436",
    appId: "1:270042979436:web:ffbcc8fcc464b09bc50c49",
    measurementId: "G-DZCNWXCRWS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;
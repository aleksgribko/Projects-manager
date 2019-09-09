import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBui4fDtGHkLFDwM9YquxC0WBMmP8bjiqg",
    authDomain: "project-planner-with-react.firebaseapp.com",
    databaseURL: "https://project-planner-with-react.firebaseio.com",
    projectId: "project-planner-with-react",
    storageBucket: "",
    messagingSenderId: "531862986710",
    appId: "1:531862986710:web:66e2a451f37ed4a66e4e77"
  };

  firebase.initializeApp(firebaseConfig)


  export default firebase
import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCX3ne1YE8m2YNgWR4R8sUILHjEtSWuZAg",
    authDomain: "router3-a8f6f.firebaseapp.com",
    databaseURL: "https://router3-a8f6f.firebaseio.com",
    projectId: "router3-a8f6f",
    storageBucket: "router3-a8f6f.appspot.com",
    messagingSenderId: "431670362823"
  };

  const fb = firebase.initializeApp(config);
  const db = firebase.database();
  
  export {db, fb};
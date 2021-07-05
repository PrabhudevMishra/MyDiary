import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDcnYNr9YKfnxqWqxcrPQ000AwhmHzUnZA",
  authDomain: "mydiary-8f7cf.firebaseapp.com",
  databaseURL: "https://mydiary-8f7cf-default-rtdb.firebaseio.com",
  projectId: "mydiary-8f7cf",
  storageBucket: "mydiary-8f7cf.appspot.com",
  messagingSenderId: "649681672568",
  appId: "1:649681672568:web:9371cba1dd738a8e19d08d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();

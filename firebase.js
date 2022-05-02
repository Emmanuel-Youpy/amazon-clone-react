// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn3-Vuqvk_Fn9lo7jonPrYrhBylAFi680",
  authDomain: "clone-react-71d2e.firebaseapp.com",
  projectId: "clone-react-71d2e",
  storageBucket: "clone-react-71d2e.appspot.com",
  messagingSenderId: "231352208498",
  appId: "1:231352208498:web:0d507a0a4e37d41bb686eb",
  measurementId: "G-45Z7Y699LW",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAn3-Vuqvk_Fn9lo7jonPrYrhBylAFi680",
//   authDomain: "clone-react-71d2e.firebaseapp.com",
//   projectId: "clone-react-71d2e",
//   storageBucket: "clone-react-71d2e.appspot.com",
//   messagingSenderId: "231352208498",
//   appId: "1:231352208498:web:0d507a0a4e37d41bb686eb",
//   measurementId: "G-45Z7Y699LW",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

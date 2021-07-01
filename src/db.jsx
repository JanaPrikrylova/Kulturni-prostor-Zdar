import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyDBxS4-E4l_X2gBltrKdmsNpXwPOXdjUFM",
  authDomain: "kulturni-prostor-zdar.firebaseapp.com",
  projectId: "kulturni-prostor-zdar",
  storageBucket: "kulturni-prostor-zdar.appspot.com",
  messagingSenderId: "81274324069",
  appId: "1:81274324069:web:0833106946613ee9e2f28c"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
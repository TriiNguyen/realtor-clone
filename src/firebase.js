// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIOvVPv1is2F59l6sluHc2enFaVeJw1zU",
  authDomain: "realtor-react-d809e.firebaseapp.com",
  projectId: "realtor-react-d809e",
  storageBucket: "realtor-react-d809e.appspot.com",
  messagingSenderId: "563366740496",
  appId: "1:563366740496:web:c97c861faac01deee4c095",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
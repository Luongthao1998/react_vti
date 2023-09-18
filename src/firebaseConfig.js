// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfL_3kqw4B90BVgMG8YET8457x9VRbc4U",
  authDomain: "project-final-59dc7.firebaseapp.com",
  projectId: "project-final-59dc7",
  storageBucket: "project-final-59dc7.appspot.com",
  messagingSenderId: "122634691965",
  appId: "1:122634691965:web:d5c4c03d8227657de41814",
  measurementId: "G-C2F347TSQW",
};

// //* Initialize Firebase
export const app = initializeApp(firebaseConfig);

// //* Initialize Firebase Authentication and get a reference to the service
export const database = getAuth(app);
export const analytics = getAnalytics(app);

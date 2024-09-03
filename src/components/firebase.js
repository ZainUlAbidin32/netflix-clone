import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtGat6ztNRikYpofWb-IotTMIhFkIx4io",
  authDomain: "netflix-clone-31888.firebaseapp.com",
  projectId: "netflix-clone-31888",
  storageBucket: "netflix-clone-31888.appspot.com",
  messagingSenderId: "8849909320",
  appId: "1:8849909320:web:4b9f771332cb2bb41e9a7d",
  measurementId: "G-6R626E9HWL"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth};
export default db;
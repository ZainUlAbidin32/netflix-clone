import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4r7evKrhRMAA2HbufV_qexJO91J3cbEk",
  authDomain: "netflix-clone-7e03e.firebaseapp.com",
  projectId: "netflix-clone-7e03e",
  storageBucket: "netflix-clone-7e03e.firebasestorage.app",
  messagingSenderId: "704394653685",
  appId: "1:704394653685:web:36a9b00246f62269eefabc"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth};
export default db;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebase = {
  apiKey: "AIzaSyCdM0sFryW3FYhF8ubyVl0ltfKWNfG6bOo",
  authDomain: "tecproducts-b87d8.firebaseapp.com",
  databaseURL: "https://tecproducts-b87d8-default-rtdb.firebaseio.com",
  projectId: "tecproducts-b87d8",
  storageBucket: "tecproducts-b87d8.appspot.com",
  messagingSenderId: "796924900989",
  appId: "1:796924900989:web:5256742ae62cc889d8e314",
  measurementId: "G-1SG181TRNB",
};
const app = initializeApp(firebase);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhG2P4pFCCC6vUJ-O_7iMI9VnZ4J76AH4",
  authDomain: "reborn-goods-9acf1.firebaseapp.com",
  projectId: "reborn-goods-9acf1",
  storageBucket: "reborn-goods-9acf1.appspot.com",
  messagingSenderId: "638767619518",
  appId: "1:638767619518:web:39aea589a95aa617882def"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUDMFXxEc2ydt5gsHG3ggVkO_7rBfLJGw",
  authDomain: "react-netflix-clone-ea112.firebaseapp.com",
  projectId: "react-netflix-clone-ea112",
  storageBucket: "react-netflix-clone-ea112.appspot.com",
  messagingSenderId: "105200044470",
  appId: "1:105200044470:web:a24073fcd0f5dc1d3bd917",
  measurementId: "G-RFXX9YN31Y"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDj85D_Fj0Z9Y4nWVxpfdhNXoIMV1D7LHI",
  authDomain: "unolo-defc4.firebaseapp.com",
  projectId: "unolo-defc4",
  storageBucket: "unolo-defc4.firebasestorage.app",
  messagingSenderId: "306926177924",
  appId: "1:306926177924:web:3b4252893367fb33e43cd1",
  measurementId: "G-01NNRWLLXM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPCs4NHOou9HzRkthh6xKsMNZUbEAaQcc",
  authDomain: "jobtrack-project.firebaseapp.com",
  projectId: "jobtrack-project",
  storageBucket: "jobtrack-project.firebasestorage.app",
  messagingSenderId: "573405408281",
  appId: "1:573405408281:web:7fd14a1d4a4416eac84e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
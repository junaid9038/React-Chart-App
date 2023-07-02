import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_Z_1-wmW6typ2XyWsYYwhUMQ6JU3DaSY",
  authDomain: "chat-c6119.firebaseapp.com",
  projectId: "chat-c6119",
  storageBucket: "chat-c6119.appspot.com",
  messagingSenderId: "144522889682",
  appId: "1:144522889682:web:a8d48be23ee4b0e39f200b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
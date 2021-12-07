// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvPD9qjeV9n7KlX7Ofdo2DaC6PVZVmbfA",
  authDomain: "doanvatdumbum.firebaseapp.com",
  projectId: "doanvatdumbum",
  storageBucket: "doanvatdumbum.appspot.com",
  messagingSenderId: "303952950273",
  appId: "1:303952950273:web:8ded91d3328d1bf960bc00"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(firebase);

auth.languageCode = 'vi';
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');
googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');

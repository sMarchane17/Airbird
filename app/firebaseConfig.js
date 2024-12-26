import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgatG2MCgp0HS-94kHgV0Powet7tARF1M",
  authDomain: "airbird-e6341.firebaseapp.com",
  projectId: "airbird-e6341",
  storageBucket: "airbird-e6341.appspot.com",
  messagingSenderId: "610825431278",
  appId: "1:610825431278:web:ee070945d960576581abff",
  measurementId: "G-LT7ZPHYY2Q"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser l'authentification Firebase
const auth = getAuth(app);

export { auth };

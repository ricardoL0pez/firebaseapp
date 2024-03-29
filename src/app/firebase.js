// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
/* import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js" */


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDi7TmoHiMPNUh6ETiNpNOobKqt80Hn5mU",
    authDomain: "fir-app-494e3.firebaseapp.com",
    projectId: "fir-app-494e3",
    storageBucket: "fir-app-494e3.appspot.com",
    messagingSenderId: "522990712757",
    appId: "1:522990712757:web:b46fdae5e55b1b19048bfc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
/* export const db = getFirestore(app) */
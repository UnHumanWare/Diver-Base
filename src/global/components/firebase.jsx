import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase konfiguráció
const firebaseConfig = {
    apiKey: "AIzaSyD9nfZNUSapzigOQLO6QXziIK1E_Uktmlc",
    authDomain: "diver-base-e6de8.firebaseapp.com",
    projectId: "diver-base-e6de8",
    storageBucket: "diver-base-e6de8.appspot.com",
    messagingSenderId: "592231689709",
    appId: "1:592231689709:web:a2acdb47c90fcfd9868be4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log('Bejelentkezett felhasználó:', user);
            alert('Sikeres bejelentkezés!');
        })
        .catch((error) => {

            console.error('Bejelentkezési hiba:', error);
            alert('Bejelentkezési hiba: ' + error.message);
        });
});


export { db, auth };


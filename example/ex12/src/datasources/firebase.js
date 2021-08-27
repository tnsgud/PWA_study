// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDnK-VYmdr1saqXxD_-iAkl9PrTYbe_5AM',
    authDomain: 'pwa-login-auth-e03b3.firebaseapp.com',
    projectId: 'pwa-login-auth-e03b3',
    storageBucket: 'pwa-login-auth-e03b3.appspot.com',
    messagingSenderId: '702189440799',
    appId: '1:702189440799:web:e7b24817fd48e156f3aa2a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const oFirebaseAuth = app.auth();

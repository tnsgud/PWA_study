// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkGxSGucCQdu2bG2L4U-g2Z8h-7dEjYew",
    authDomain: "pwa-notification-push-2f105.firebaseapp.com",
    projectId: "pwa-notification-push-2f105",
    storageBucket: "pwa-notification-push-2f105.appspot.com",
    messagingSenderId: "527736310623",
    appId: "1:527736310623:web:965ad189d25448772684ea"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const oDB = app.database()
export const oSubscriptionsInDB = oDB.ref('subscriptions')
import firebase from 'firebase/app';
import 'firebase/firebase-database';

const oDB = firebase
    .initializeApp({
        apiKey: 'AIzaSyC8N0KWjPgmeUKcjRCimCbvxiBJalfSZQU',
        authDomain: 'pwa-to-do-85a4b.firebaseapp.com',
        projectId: 'pwa-to-do-85a4b',
        storageBucket: 'pwa-to-do-85a4b.appspot.com',
        messagingSenderId: '447293062754',
        appId: '1:447293062754:web:3e152482e8658930e49b3b',
    })
    .database();

export const oTodosinDB = oDB.ref('todos');

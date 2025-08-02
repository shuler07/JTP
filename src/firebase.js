import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAsMG_4s0N7Dbpw9P1bv9jjm1Qll36BDyQ',
    authDomain: 'firstproject-207f5.firebaseapp.com',
    projectId: 'firstproject-207f5',
    storageBucket: 'firstproject-207f5.firebasestorage.app',
    messagingSenderId: '283821068320',
    appId: '1:283821068320:web:5826a58342bcc1f65d2c45',
    measurementId: 'G-3VY41RFF2B',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
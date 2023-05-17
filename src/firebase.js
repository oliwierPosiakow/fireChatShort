import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCh0Cqzijhop45_bz_5icWT1CmRfk-mzqU",
    authDomain: "firechat-1696e.firebaseapp.com",
    projectId: "firechat-1696e",
    storageBucket: "firechat-1696e.appspot.com",
    messagingSenderId: "881235827142",
    appId: "1:881235827142:web:c3f84bcd23ceed07d0bac7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
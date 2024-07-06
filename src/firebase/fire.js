import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC4VjA9mnAP8myyK4iUEKQBnS8RwRdZkps",
    authDomain: "culti-iith-77c54.firebaseapp.com",
    projectId: "culti-iith-77c54",
    storageBucket: "culti-iith-77c54.appspot.com",
    messagingSenderId: "95277249815",
    appId: "1:95277249815:web:ab539d1a53943382e2b352",
    measurementId: "G-T7X99B5C2J"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const analytics = getAnalytics(app);
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth, db , googleProvider} from '../firebase/fire';
import { doc, setDoc } from 'firebase/firestore';

export const signIn = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res.user;
    } catch (error) {
        console.error('Error signing in:', error);
        return { error: error.message };
    }
};

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error signing out:', error);
        return { error: error.message };
    }
};

export const signUp = async (email, password, userData) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const userRef = doc(db, "users", res.user.uid);
        await setDoc(userRef, {
            ...userData,
            uid: res.user.uid
        });
        return res.user;
    } catch (error) {
        console.error('Error signing up:', error);
        return { error: error.message };
    }
};

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        // Optionally, store user data in Firestore
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            email: user.email,
            displayName: user.displayName,
            uid: user.uid
        });

        return { user, token };
    } catch (error) {
        console.error('Error signing in with Google:', error);
        return { error: error.message };
    }
};

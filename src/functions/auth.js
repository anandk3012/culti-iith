import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/fire'
import { doc, setDoc } from 'firebase/firestore'

export const signIn = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res.user;
    } catch (error) {
        return error;
    }
};

export const logOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        return error;
    }
}

export const signUp = async (email, password,userData) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const userRef = doc(db, "users", res.user.uid);
        await setDoc(userRef, {
            ...userData,
            uid: res.user.uid
        });
        return res.user;
    } catch (error) {
        return error;
    }
};

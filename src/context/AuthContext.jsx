import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react'
import { auth, db } from '../firebase/fire';
import { doc } from 'firebase/firestore';


const UserContext = createContext();

export const UserAuth = () => {
    return useContext(UserContext)
}

export default function AuthContextProvider({ children }) {
    const [isLoggedOut, setIsLoggedOut] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setIsLoggedOut(false);
                onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
                    setUser(doc.data());
                });

                console.log("It ran again");
            } else {
                setIsLoggedOut(true);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <UserContext.Provider
            value={{
                isLoggedOut,
                user
            }}
        >
            {children}
        </UserContext.Provider>);
}
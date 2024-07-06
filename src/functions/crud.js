import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import db from '../firebase/fire'
// const testData = {
    //     name: "test",
    //     age: 20,
    //     email: "test@test.com"
    // }
    // createData("userData", testData);
    
const generateRandomID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random();
};

export const createData = async (collectionName, data) => {
    const id = generateRandomID();
    try {
        const docRef = doc(db, collectionName, id);
        await setDoc(docRef, {
            id,
            ...data
        });
        return id;
    } catch (error) {
        console.error("Error adding doc : ", error);
    }
};


export const readData = async (collectionName, id) => {
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error reading doc : ", error.message);
    }
};

export const updateData = async (collectionName, id, data) => {
    try {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, {
            id: id,
            ...data
        });
        console.log("Document updated with ID: ", id);
    } catch (error) {
        console.error("Error updating doc : ", error);
    }
    // updateData("userData", "test", testData);
}

export const deleteData = async (collectionName, id) => {
    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
        console.log("Document deleted with ID: ", id);
    } catch (error) {
        console.error("Error deleting doc : ", error);
    }
    deleteData("userData", "test");
}

export const readAllData = async (collectionName) => {
    try {
        const newDataArr = [];
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            newDataArr.push(doc.data());
        });
        return newDataArr;
    } catch (error) {
        console.error("Error reading all docs : ", error.message);
    }
};

export const listenToCollection = (collectionName, callback) => {
    const collectionRef = collection(db, collectionName);
    return onSnapshot(collectionRef, (querySnapshot) => {
        const newDataArr = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            newDataArr.push(doc.data());
        });
        callback(newDataArr);
    });
};

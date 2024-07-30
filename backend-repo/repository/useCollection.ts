import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';

import { db } from '../config/firebaseConfig';
import { IUser } from '../interfaces/user.interface';

// Function to add a user to Firestore
export const addUser = async (user: IUser) => {
  const docRef = await addDoc(collection(db, 'users'), user);
  return docRef.id;
};

// Function to fetch all users from Firestore
export const fetchUsers = async (): Promise<IUser[]> => {
  const usersSnap = await getDocs(collection(db, 'users'));
  const users: IUser[] = [];
  usersSnap.forEach(doc => {
    users.push({ id: doc.id, ...doc.data() } as IUser);
  });
  return users;
};

// Function to update a user in Firestore
export const updateUser = async (id: string, user: Partial<IUser>) => {
  const userRef = doc(db, 'users', id);
  await updateDoc(userRef, user);
};

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};
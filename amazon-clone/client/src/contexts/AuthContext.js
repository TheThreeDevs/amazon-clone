import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile, updateEmail, updatePassword, deleteUser } from "firebase/auth";
// import { database } from "../firebase";
//create a context "state"
export const AuthContext = React.createContext();
//function that returns the context
export function useAuth() {
  return useContext(AuthContext);
}

//let all children components to pass by!
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  //this prevents from anything showing up until firebase is ready to go!
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("current user", user);
      if (user) {
        setCurrentUser(user);
        setLoading(false);
        console.log("Firestore connecting...");
      } else {
        //still need these to work, even with a null current user
        console.log("no current user");
        setCurrentUser(user);
        setLoading(false)
      }
    })
    return unsubscribe;
  }, []);

  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function updateProfileName(auth, name, photoUrl = "") {
    return updateProfile(auth, { "displayName": name, "photoURL" : photoUrl });
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function signOut() {
    return auth.signOut();
  }

  function updateTheEmail(newEmail) {
    return updateEmail(currentUser, newEmail);
  }

  function updateThePassword(newPassword) {
    return updatePassword(currentUser, newPassword);
  }

  function updateTheProfile(newName) {
    return updateProfile(currentUser, {"displayName": newName});
  }

  function deleteTheUser() {
    return deleteUser(currentUser);
  }

  const myValues = {
    currentUser,
    signIn,
    signUp,
    updateProfileName,
    resetPassword,
    signOut,
    updateTheEmail,
    updateThePassword,
    updateTheProfile,
    deleteTheUser
  };
  return (
    <AuthContext.Provider value={myValues}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
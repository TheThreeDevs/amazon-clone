import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile, signInWithEmailAndPassword } from "firebase/auth";
//create a context "state"
const AuthContext = React.createContext();
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
      setCurrentUser(user);
      console.log("Current user: ", user);
      setLoading(false);
    });
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

  function signInWithAuth(auth, email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const myValues = {
    currentUser,
    signIn,
    signUp,
    updateProfileName,
    signInWithAuth
  };
  return (
    <AuthContext.Provider value={myValues}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
import React, { createContext, useState, useEffect } from "react";
import firebase from "../../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  function signUp(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return firebase.auth().signOut();
    
  }

  function resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  const values = {
    currentUser,
    login,
    signUp,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

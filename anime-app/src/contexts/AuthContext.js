import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import axios from "axios";
import firebase from 'firebase/app'


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentuser] = useState();
  const [loading, setLoading] = useState(true);
  const [AnimeData, setAnimeData] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider)
  }

  function logOut() {
    return auth.signOut();
  }

  function getAnimeData() {
    axios
      .get(
        "https://us-central1-servelessanimeapp5.cloudfunctions.net/helloWorld"
      )
      .then((res) => {
        setAnimeData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentuser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logOut,
    AnimeData,
    getAnimeData,
    loginWithGoogle
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
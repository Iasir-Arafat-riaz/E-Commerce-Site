import { useEffect, useState } from "react";
import { firebaseInitialize } from "../firebase/firebaseInit";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";


firebaseInitialize()

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
//   const [error, setError] = setError("");

  

  const googleSignin = () => {
   return signInWithPopup(auth, googleProvider)
    // .then((result) => {
    //   setUser(result.user);
    //   console.log(result.user)
    // });
  };

  const userSignout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        // Sign-out successful.
      })
    
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        
      }
    });
  }, []);


  return {user,googleSignin, userSignout};
};

export {useFirebase}

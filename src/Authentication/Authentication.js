import React, { createContext, useEffect, useMemo, useState } from "react";
import * as Google from "expo-google-app-auth";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

export const AuthContext = createContext();
// const config = {
//   androidClientId:
//     "1042437719667-cdautr6uqo62ir3rhv3hh08f7eoq4k9d.apps.googleusercontent.com",
//   iosClientId:
//     "1042437719667-n0jtcll3s8gb2r7q7vn12hf946pnmhp4.apps.googleusercontent.com",
//   webClientId: "1:1042437719667:web:67cad918681b6c726ecc06",
//   scopes: ["profile", "email"],
//   permissions: ["public_profile", "email", "gender", "location"],
// };
export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsub;
  }, []);

  // const signInWithGoogle = async () => {
  //   await Google.logInAsync(config)
  //     .then(async (loginResult) => {
  //       if (loginResult.type === "success") {
  //         const { idToken, accessToken } = loginResult;
  //         const credential = GoogleAuthProvider.credential(
  //           idToken,
  //           accessToken
  //         );

  //         await signInWithCredential(auth, credential);
  //       }

  //       return Promise.reject();
  //     })
  //     .catch((error) => setError(error));
  //   // .finally(() => setLoading(false));
  // };

  const Login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((usr) => {
        if (!usr) {
          alert("you have to create an account");
        }
        if (email === "") {
          setError("pls enter your email");
        } else if (password === "") {
          setError("pls enter password");
        }
        if (!user) {
          alert("you have to create an account");
        } else {
          setError(err);
        }
        setUser(usr);
      })
      .catch((err) => {
        setError(err);
        alert(error);
      });
  };
  const Register = (email, password, cpassword) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((usr) => {
        if (email === "") {
          setError("pls enter your email");
        } else if (password === "" && cpassword === "") {
          setError("pls enter your password");
        } else if (password !== cpassword) {
          setError("your password doesn't match");
        } else {
          setError(err);
        }
        setUser(usr);
      })
      .catch((err) => {
        // setError(err);
        alert(error);
      });
  };

  const logout = () => {
    // setLoading(true);

    signOut(auth).catch((err) => setError(err));
  };

  // const memoValue = useMemo(
  //   () => ({
  //     user,
  //     signInWithGoogle,
  //     error,
  //     //   loading,
  //     logout,
  //   }),
  //   [user, error]
  // );
  return (
    <AuthContext.Provider
      value={{
        user,
        // signInWithGoogle,4
        error,
        //   loading,
        logout,
        Register,
        Login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

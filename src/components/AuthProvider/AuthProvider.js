import React, { createContext } from "react";
import { useFirebase } from "../../hoock/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContent = useFirebase()
  return (
    <div>
      <AuthContext.Provider value={allContent}>
          {children}
          </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
